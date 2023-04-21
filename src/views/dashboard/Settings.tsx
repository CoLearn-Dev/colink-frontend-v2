import React, { useEffect, useState } from 'react'

import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardText,
  CCardTitle,
  CCol,
  CFormInput,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CTooltip,
} from '@coreui/react'

import { cilGlobeAlt, cilUser, cilSettings, cilReload } from '@coreui/icons'

import { useDispatch, useSelector } from 'react-redux'
import { copyText, createDownloadHref, setAdmin, setClient, setJwt } from 'src/utils'
import CIcon from '@coreui/icons-react'
import { UserData, daysToTimestamp, generateKeyAndJwt, generateToken } from 'src/lib'
import Collapse from 'react-bootstrap/Collapse'

declare let window: any

async function getUserData(
  method: Function,
  callbacks: [Function | null, Function | null],
  args: Array<any>,
) {
  await method(...args)
    .then((res: string | UserData) => {
      let setPrivateKey: Function | null = callbacks[0]
      let setJwt: Function | null = callbacks[1]

      // Refresh JWT
      if (typeof res === 'string') {
        if (setJwt !== null) {
          setJwt(res)
        }
      }

      // Guest JWT
      else {
        if (setPrivateKey !== null) {
          setPrivateKey(res.privateKey)
        }

        if (setJwt !== null) {
          setJwt(res.userJwt)
        }
      }
    })
    .catch((err: Error) => {
      alert(err)
    })
}

const Settings: React.FC = () => {
  const [refreshTime, updateRefreshTime] = useState(0)

  const [generatedJwt, updateGenJwt] = useState('')
  const [tempPk, updateTempPk] = useState('')
  const [generatedPk, updateGenPk] = useState('')

  const [displayGenJwt, toggleGenJwt] = useState(false)
  const [displayGenPk, toggleGenPk] = useState(false)
  const [displayJwt, toggleJwt] = useState(false)

  const [triggerLogout, updateLogoutTrigger] = useState(false)

  const { jwt } = useSelector((state: any) => state.jwt)
  const { client } = useSelector((state: any) => state.client)
  const { isAdmin } = useSelector((state: any) => state.isAdmin)
  const dispatch = useDispatch()

  function logout() {
    dispatch(setClient(''))
    dispatch(setJwt(''))
    dispatch(setAdmin(false))
    localStorage.clear()
  }

  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h3 id="traffic" className="card-title mb-0">
                Settings <CIcon icon={cilSettings} size="xl" className="ms-1" />
              </h3>
            </CCol>
          </CRow>
        </CCardBody>
        <CCardFooter>
          <CRow>
            <CCol>
              <CCard className="mt-2 mb-2">
                <CCardBody>
                  <CRow>
                    <CCol>
                      <CCardTitle id="traffic" className="card-title mb-0">
                        Server Status <CIcon icon={cilGlobeAlt} size="lg" className="ms-1" />
                      </CCardTitle>
                      <hr />
                      <CCardText>
                        Host: {client} <br />
                        Status: Online
                      </CCardText>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
              <CCard className="mt-2 mb-2">
                <CCardBody>
                  <CRow>
                    <CCol>
                      <CCardTitle id="traffic" className="card-title mb-0">
                        User Status <CIcon icon={cilUser} size="lg" className="ms-1" />
                      </CCardTitle>
                      <hr />
                      <CCardText>
                        JWT Information <br />
                        <CTooltip content={jwt} placement="top">
                          <CButton className="mt-1 btn-sm" color="light">
                            Hover to Reveal
                          </CButton>
                        </CTooltip>
                        <CButton className="mt-1 ms-2 btn-sm" color="light">
                          <a
                            download="user_jwt.txt"
                            href={createDownloadHref(jwt)}
                            style={{ textDecoration: 'none', color: 'black' }}
                          >
                            Download
                          </a>
                        </CButton>
                        <CButton
                          className="mt-1 ms-2 btn-sm"
                          onClick={() => copyText(jwt)}
                          color="light"
                        >
                          Copy to Clipboard
                        </CButton>
                      </CCardText>
                      <CCardText>
                        Refresh JWT (# Days)
                        <CInputGroup className="mt-1 mb-3" style={{ width: '400px' }}>
                          <CInputGroupText>
                            <CIcon icon={cilReload} size="sm" />
                          </CInputGroupText>
                          <CFormInput
                            aria-label="number input"
                            onChange={(e) => {
                              let days = parseInt(e.target.value)
                              if (typeof days === 'number') {
                                updateRefreshTime(parseInt(e.target.value))
                              } else {
                                updateRefreshTime(0)
                              }
                            }}
                            size="sm"
                          ></CFormInput>
                          <CButton
                            className="ms-2 btn-sm"
                            onClick={() =>
                              // getUserData(
                              //   generateToken,
                              //   [
                              //     null,
                              //     (jwt: string) => {
                              //       dispatch(setJwt(jwt))
                              //     },
                              //   ],
                              //   [client, jwt, daysToTimestamp(refreshTime)],
                              // ).then(() => updateRefreshTime(0))
                              {}
                            }
                            color="light"
                          >
                            Refresh JWT
                          </CButton>
                          <span className="ms-2">(broken)</span>
                        </CInputGroup>
                      </CCardText>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
            {isAdmin ? (
              <CCol>
                <CCard className="mt-2 mb-2">
                  <CCardBody>
                    <CRow>
                      <CCol>
                        <CCardTitle id="traffic" className="card-title mb-0">
                          Create User JWT
                        </CCardTitle>
                        <hr />
                        <CCardText>
                          Generate New Private Key + JWT{' '}
                          <CButton
                            className="ms-2 btn-sm"
                            onClick={() => {
                              getUserData(
                                generateKeyAndJwt,
                                [updateGenPk, updateGenJwt],
                                [client, jwt],
                              )
                            }}
                            color="light"
                          >
                            Generate JWT
                          </CButton>
                          <span className="ms-2">(broken)</span>
                        </CCardText>
                        <CCardText>
                          <h3>Generated JWT:</h3>
                          {generatedJwt != '' ? (
                            <>
                              <span>Set</span>
                              <button
                                onClick={() => toggleGenJwt(!displayGenJwt)}
                                aria-controls="collapse"
                                aria-expanded={displayGenJwt}
                              >
                                Display
                              </button>
                              <button>
                                <a download="user_jwt.txt" href={createDownloadHref(generatedJwt)}>
                                  Download
                                </a>
                              </button>
                              <button onClick={() => copyText(generatedJwt)}>
                                Copy to Clipboard
                              </button>
                              <Collapse in={displayGenJwt}>
                                <div>{generatedJwt}</div>
                              </Collapse>
                              <br />
                            </>
                          ) : (
                            <span>No JWT Generated</span>
                          )}
                          {generatedPk != '' ? (
                            <>
                              <h3>Private Key:</h3>
                              <span>Set</span>
                              <button
                                onClick={() => toggleGenPk(!displayGenPk)}
                                aria-controls="collapse"
                                aria-expanded={displayGenPk}
                              >
                                Display
                              </button>
                              <button>
                                <a
                                  download="private_key.txt"
                                  href={createDownloadHref(generatedPk)}
                                >
                                  Download
                                </a>
                              </button>
                              <button onClick={() => copyText(generatedPk)}>
                                Copy to Clipboard
                              </button>
                              <Collapse in={displayGenPk}>
                                <div>{generatedPk}</div>
                              </Collapse>
                            </>
                          ) : (
                            <></>
                          )}
                        </CCardText>
                      </CCol>
                    </CRow>
                  </CCardBody>
                </CCard>
              </CCol>
            ) : (
              <></>
            )}
          </CRow>
        </CCardFooter>
      </CCard>
    </>
  )
}

export default Settings
