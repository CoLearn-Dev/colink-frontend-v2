import React, { useEffect } from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import {
  defineFileAction,
  ChonkyActions,
  ChonkyFileActionData,
  FileArray,
  FileBrowser,
  FileContextMenu,
  FileData,
  FileHelper,
  FileList,
  FileNavbar,
  FileToolbar,
  setChonkyDefaults,
} from 'chonky'

import { ChonkyIconFA } from 'chonky-icon-fontawesome'
import { useCallback, useMemo, useState } from 'react'

import DemoFsMap from './demo.fs_map.json'
import { useDispatch, useSelector } from 'react-redux'
import { getUserStorageEntries, keyNameFromPath } from 'src/lib'
import { StorageEntry } from 'src/proto_js/colink_pb'

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
    console.log(keys)
    files = Array.from(keys).map((key: string) => {
      let entry: FileData = {
        id: key,
        name: keyNameFromPath(key),
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
      name: keyNameFromPath(fullPath),
      isHidden: false,
      isDir: isDirectory(fullPath),
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

export const useFileActionHandler = (setPath: Function) => {
  return useCallback(
    (data: ChonkyFileActionData) => {
      if (data.id === ChonkyActions.OpenFiles.id) {
        if (typeof data.payload.targetFile !== 'undefined') {
          setPath(data.payload.targetFile.id)
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

  const handleFileAction = useFileActionHandler(props.setPath)
  return (
    <div style={{ height: 400 }}>
      <FileBrowser
        instanceId={props.instanceId}
        files={files}
        fileActions={myFileActions}
        folderChain={folderChain}
        onFileAction={handleFileAction}
        thumbnailGenerator={(file: FileData) =>
          file.thumbnailUrl ? `https://chonky.io${file.thumbnailUrl}` : null
        }
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

  const [path, setPath] = useState('')

  async function getKeysAtPrefix(prefix: string) {
    let paths: string[] = []
    if (prefix == '') {
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

  useEffect(() => {
    if (jwt != '' && client != '') {
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
            />
          </CRow>
        </CCardFooter>
      </CCard>
    </>
  )
}

export default Dashboard
