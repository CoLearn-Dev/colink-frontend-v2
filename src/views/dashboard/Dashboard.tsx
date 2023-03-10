import React, { useEffect } from 'react'

import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from '@coreui/react'

import {
  defineFileAction,
  ChonkyActions,
  ChonkyFileActionData,
  FileArray,
  FileBrowser,
  FileContextMenu,
  FileData,
  FileList,
  FileNavbar,
  FileToolbar,
  setChonkyDefaults,
} from 'chonky'

import { ChonkyIconFA } from 'chonky-icon-fontawesome'
import { useCallback, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {
  getUserStorageEntries,
  keyNameFromPath,
  lastKeyNameFromPath,
  readEntry,
  storageEntryToJSON,
} from 'src/lib'
import { StorageEntry } from 'src/proto_js/colink_pb'
import { createDownloadHref } from 'src/utils'

setChonkyDefaults({ iconComponent: ChonkyIconFA })

export function getPrefixFromPath(path: string) {
  return path.substring(0, path.indexOf('@'))
}

export function isDirectory(path: string) {
  return path.slice(-2) === '@0'
}

const getNewFiles = async (path: string, getFiles: Function): Promise<FileArray> => {
  let prefix: string = getPrefixFromPath(path)
  let files: FileArray = []
  await getFiles(prefix).then((keys: string[]) => {
    files = Array.from(keys).map((key: string) => {
      let entry: FileData = {
        id: key,
        name: lastKeyNameFromPath(key),
        isDir: isDirectory(key),
        isHidden: false,
      }
      return entry
    })
  })
  return Promise.resolve(files)
}

const getFolderChain = async (path: string): Promise<FileArray> => {
  let rootEntry: FileData = {
    id: '@',
    name: 'root',
    isHidden: false,
    isDir: true,
  }
  const folderChain = []

  const start = path.substring(0, path.indexOf('::')) + '::'
  let end = path.substring(path.indexOf('::') + 2)

  while (end !== '') {
    let fullPath = start + end
    let entry: FileData = {
      id: fullPath,
      name: lastKeyNameFromPath(fullPath),
      isDir: isDirectory(fullPath),
      isHidden: false,
    }
    folderChain.unshift(entry)

    let lastIndex = end.lastIndexOf(':')
    if (lastIndex !== -1) {
      end = end.substring(0, lastIndex) + '@0'
    } else {
      end = ''
    }
  }

  folderChain.unshift(rootEntry)

  return Promise.resolve(folderChain)
}

export const useFileActionHandler = (setPath: Function, displayEntry: Function) => {
  return useCallback(
    (data: ChonkyFileActionData) => {
      if (data.id === ChonkyActions.OpenFiles.id) {
        if (typeof data.payload.targetFile !== 'undefined') {
          if (data.payload.targetFile.isDir) {
            // go to next path/series of entries
            setPath(data.payload.targetFile.id)
          } else {
            displayEntry(keyNameFromPath(data.payload.targetFile.id))
          }
        }
      }
    },
    [setPath],
  )
}

const test = defineFileAction({
  id: 'testPrint',
  requiresSelection: true,
  button: {
    name: 'Test',
    toolbar: true,
    group: 'Options',
  },
})

const myFileActions = [test]

const ReadOnlyVFSBrowser: React.FC<{
  instanceId: string
  path: string
  setPath: Function
  getKeys: Function
  displayEntry: Function
}> = (props) => {
  const [files, setFiles] = useState<FileArray<FileData>>([])
  const [folderChain, setFolderChain] = useState<FileArray<FileData>>([])

  useEffect(() => {
    async function updateFolderChain() {
      await getFolderChain(props.path).then((chain: FileArray) => {
        setFolderChain([...chain])
      })
      return true
    }
    async function updateFiles() {
      await getNewFiles(props.path, props.getKeys).then((files: FileArray) => {
        setFiles([...files])
      })
      return true
    }
    updateFiles()
    updateFolderChain()
  }, [props.path])

  const handleFileAction = useFileActionHandler(props.setPath, props.displayEntry)
  return (
    <div style={{ height: 400 }}>
      <FileBrowser
        instanceId={props.instanceId}
        files={files}
        fileActions={myFileActions}
        folderChain={folderChain}
        onFileAction={handleFileAction}
        thumbnailGenerator={(file: FileData) => null}
      >
        <FileNavbar />
        <FileToolbar />
        <FileList />
        <FileContextMenu />
      </FileBrowser>
    </div>
  )
}

const Dashboard: React.FC = () => {
  const { jwt } = useSelector((state: any) => state.jwt)
  const { client } = useSelector((state: any) => state.client)
  const dispatch = useDispatch()

  // Keep track of current key path for file navigation
  const [path, setPath] = useState('')

  // Variables for displaying entry information
  const defEmpty = new StorageEntry()
  const [entry, updateDisplay] = useState(defEmpty)
  const [visible, updateVisible] = useState(false)
  const [isString, updateB64] = useState(true)

  async function getKeysAtPrefix(prefix: string) {
    let paths: string[] = []
    if (prefix === '') {
      await getUserStorageEntries(client, jwt).then((entries: StorageEntry[]) => {
        paths = entries.map((entry: StorageEntry) => {
          return entry.getKeyPath()
        })
      })
    } else {
      await getUserStorageEntries(client, jwt, prefix).then((entries: StorageEntry[]) => {
        paths = entries.map((entry: StorageEntry) => {
          return entry.getKeyPath()
        })
      })
    }
    return Promise.resolve(paths)
  }

  async function displayEntry(keyName: string) {
    await readEntry(client, jwt, keyName).then((entry: StorageEntry) => {
      updateDisplay(entry)
      updateVisible(true)
    })
  }

  useEffect(() => {
    if (jwt !== '' && client !== '') {
      setPath('@')
    }
  }, [jwt, client])

  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Storage Entries
              </h4>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardFooter>
          <CRow className="text-center">
            <ReadOnlyVFSBrowser
              instanceId="ah"
              path={path}
              setPath={setPath}
              getKeys={getKeysAtPrefix}
              displayEntry={displayEntry}
            />
          </CRow>
        </CCardFooter>
      </CCard>

      <CModal
        size="lg"
        backdrop="static"
        style={{ maxWidth: '75%', marginLeft: '12.5%' }}
        visible={visible}
        onClose={() => updateVisible(false)}
        alignment="center"
      >
        <CModalHeader>
          <CModalTitle>Entry: {visible ? lastKeyNameFromPath(entry.getKeyPath()) : ''}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CCardGroup>
            <CCard></CCard>
          </CCardGroup>
          <CCardGroup>
            <CCard className="p-2">
              <CCardBody className="text-center">
                <div
                  style={{
                    whiteSpace: 'pre-wrap',
                    textAlign: 'left',
                    overflowWrap: 'break-word',
                    width: '100%',
                  }}
                >
                  {visible ? JSON.stringify(storageEntryToJSON(entry, isString), null, 2) : ''}
                </div>
                <CButton className="ms-2" active tabIndex={-1} color="info">
                  <a
                    download="payload.txt"
                    href={
                      visible
                        ? createDownloadHref(
                            JSON.stringify(storageEntryToJSON(entry, isString), null, 2),
                          )
                        : '#'
                    }
                  >
                    Download Entry
                  </a>
                </CButton>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => updateVisible(false)}>
            Close
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default Dashboard
