import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilGlobeAlt, cilLockLocked, cilUser } from '@coreui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { setClient, setJwt, setAdmin, readFromFile } from 'src/utils'
import {
  generateJwtMetaMask,
  getUserConsentMM,
  generateToken,
  UserData,
  Consent,
  validateJwtAndPrivilege,
  verifyClient,
} from 'src/lib'

const Login = () => {
  // Disables custom URLs if default selected
  const [isDefault, setDefault] = useState(false)

  // Panel to configure JWT
  const [visibleJwt, setVisibleJwt] = useState(false)

  // For getting admin JWT on initial MetaMask request
  const [visibleMM, setVisibleMM] = useState(false)

  // Toggle loading panel
  const [visibleLoad, setVisibleLoad] = useState(false)
  const [errorState, setErrorState] = useState(false)

  // Temp value storage (before commiting to local storage)
  const [address, setLocalAddress] = useState('')
  const [localJwt, setLocalJwt] = useState('')
  const [consentMM, setConsentMM] = useState({} as Consent)
  const [localJwtMM, setLocalJwtMM] = useState('')

  const { client } = useSelector((state: any) => state.client)
  const dispatch = useDispatch()

  async function loginWithJwt(jwt: string) {
    await validateJwtAndPrivilege(client, jwt).then((status: string) => {
      if (status !== 'invalid') {
        dispatch(setJwt(jwt))
        localStorage.setItem('jwt', jwt)
        if (status === 'user') {
          dispatch(setAdmin(false))
          localStorage.setItem('isAdmin', 'false')
        } else {
          dispatch(setAdmin(true))
          localStorage.setItem('isAdmin', 'true')
        }
      } else {
        alert('Error: Invalid JWT or hostname.')
      }
    })
  }

  async function loginWithMetaMask() {
    let consent: Consent = await getUserConsentMM(client, { authorization: '' })
    await generateToken(client, '', consent)
      .then((token: string) => {
        loginWithJwt(token)
      })
      .catch(async (err: Error) => {
        setConsentMM(consent)
        setVisibleMM(true)
        setVisibleJwt(false)
      })
  }

  async function createMetaMask(jwt: string) {
    await generateJwtMetaMask(client, jwt, consentMM)
      .then((data: UserData) => {
        loginWithJwt(data.userJwt)
        setVisibleMM(false)
        setVisibleJwt(false)
      })
      .catch((err: Error) => {
        alert(err)
      })
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <CCard>
              <CCardHeader className="text-center p-4">
                <h1>CoLink Login</h1>
              </CCardHeader>
              <CCardBody className="text-center p-4">
                <CForm
                  onSubmit={async (e) => {
                    e.preventDefault()
                    setErrorState(false)
                    setVisibleLoad(true)
                    if (await verifyClient(address)) {
                      setVisibleLoad(false)
                      setVisibleJwt(true)
                      dispatch(setClient(address))
                      localStorage.setItem('address', address)
                    } else {
                      setErrorState(true)
                    }
                  }}
                >
                  <h4>Official Server</h4>
                  <p className="text-medium-emphasis mb-3" style={{ fontSize: '18px' }}>
                    Connect to an official CoLink server from the list of servers below:
                  </p>
                  <CInputGroup className="mb-4" style={{ width: '80%', marginLeft: '10%' }}>
                    <CInputGroupText>
                      <CIcon icon={cilGlobeAlt} />
                    </CInputGroupText>
                    <CFormSelect
                      className="mx-auto"
                      style={{ width: '80%' }}
                      aria-label="Default select"
                      options={[
                        { label: 'Custom Server (configure below)', value: ' ' },
                        {
                          label: 'test-0 (https://test-0.colink-server.colearn.cloud)',
                          value: 'https://test-0.colink-server.colearn.cloud',
                        },
                        {
                          label: 'test-1 (https://test-1.colink-server.colearn.cloud)',
                          value: 'https://test-1.colink-server.colearn.cloud',
                        },
                        {
                          label: 'test-2 (https://test-2.colink-server.colearn.cloud)',
                          value: 'https://test-2.colink-server.colearn.cloud',
                        },
                      ]}
                      onChange={(e) => {
                        setLocalAddress(e.target.value)
                        if (e.target.value !== ' ') {
                          setDefault(true)
                        } else {
                          setDefault(false)
                        }
                      }}
                    />
                  </CInputGroup>
                  <div className="d-flex justify-content-center mb-2">
                    <div
                      style={{
                        width: '100%',
                        textAlign: 'center',
                        borderBottom: '1px solid lightgray',
                        lineHeight: '0.1em',
                        margin: '10px 0 20px',
                      }}
                    >
                      <span style={{ background: '#fff', padding: '0 15px' }}>OR</span>
                    </div>
                  </div>
                  <h4>Custom Server</h4>
                  <p className="text-medium-emphasis mb-3" style={{ fontSize: '18px' }}>
                    Specify a custom CoLink server address to connect to:
                  </p>
                  <CInputGroup className="mb-3" style={{ width: '80%', marginLeft: '10%' }}>
                    <CInputGroupText>
                      <CIcon icon={cilGlobeAlt} />
                    </CInputGroupText>
                    <CFormInput
                      disabled={isDefault}
                      placeholder="Custom Address"
                      onChange={(e) => {
                        setLocalAddress(e.target.value)
                      }}
                    />
                  </CInputGroup>
                  <CButton color="primary" active tabIndex={-1} type="submit">
                    Connect
                  </CButton>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>

      {/* Display error message if client invalid */}
      <CModal
        backdrop="static"
        visible={visibleLoad}
        onClose={() => setVisibleLoad(false)}
        alignment="center"
      >
        <CModalBody>
          <CCardGroup>
            <CCard className="p-2">
              <CCardBody className="text-center">
                {errorState ? (
                  <CForm
                    onSubmit={() => {
                      setErrorState(false)
                      setLocalAddress('')
                      setVisibleLoad(false)
                    }}
                  >
                    <p className="text-medium-emphasis mb-3" style={{ fontSize: '18px' }}>
                      Error connecting to the server. Please specify a different address.
                    </p>
                    <CButton color="primary" active tabIndex={-1} type="submit">
                      Close
                    </CButton>
                  </CForm>
                ) : (
                  <CForm
                    onSubmit={() => {
                      setVisibleLoad(false)
                    }}
                  >
                    <p className="text-medium-emphasis mb-3" style={{ fontSize: '18px' }}>
                      Connecting to server...
                    </p>
                    <CButton color="primary" active tabIndex={-1} type="submit">
                      Cancel
                    </CButton>
                  </CForm>
                )}
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CModalBody>
      </CModal>

      {/* Get JWT/Metamask info with valid client */}
      <CModal
        size="xl"
        backdrop="static"
        visible={visibleJwt}
        onClose={() => setVisibleJwt(false)}
        alignment="center"
      >
        <CModalHeader>
          <CModalTitle>Specify your JWT or use Metamask to connect to the server.</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CCardGroup>
            <CCard className="p-4">
              <CCardBody className="text-center">
                <CForm>
                  <h2>JWT</h2>
                  <p className="mt-3 text-medium-emphasis">
                    Upload your JWT as a text file or manually paste it in the box below.
                  </p>
                  <div className="mb-3">
                    <CFormInput
                      style={{ width: '55%' }}
                      className="mx-auto"
                      type="file"
                      id="formFile"
                      onChange={(e) => {
                        readFromFile(e, setLocalJwt)
                      }}
                    />
                  </div>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>JWT</CInputGroupText>
                    <CFormTextarea
                      aria-label="text input"
                      style={{ resize: 'none', height: '150px' }}
                      value={localJwt}
                      onChange={(e) => {
                        setLocalJwt(e.target.value)
                      }}
                    ></CFormTextarea>
                  </CInputGroup>
                </CForm>
                <CButton
                  color="primary"
                  active
                  tabIndex={-1}
                  onClick={() => loginWithJwt(localJwt)}
                >
                  Confirm
                </CButton>
              </CCardBody>
            </CCard>
            <CCard className="p-4" style={{ width: '30%' }}>
              <CCardBody className="text-center">
                <div>
                  <h2>Metamask</h2>
                  <p className="mt-3 mb-3 text-medium-emphasis">
                    Connect your Metamask wallet using the button below. <br /> Note: if you have
                    not registered a Metamask account, you must provide an admin JWT to register it.
                  </p>
                  <CButton active tabIndex={-1} onClick={() => loginWithMetaMask()}>
                    Connect Wallet
                  </CButton>
                </div>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisibleJwt(false)}>
            Close
          </CButton>
        </CModalFooter>
      </CModal>

      <CModal
        size="lg"
        backdrop="static"
        style={{ maxWidth: '75%', marginLeft: '12.5%' }}
        visible={visibleMM}
        onClose={() => setVisibleMM(false)}
        alignment="center"
      >
        <CModalHeader>
          <CModalTitle>Account not registered</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CCardGroup>
            <CCard className="p-4">
              <CCardBody className="text-center">
                <CForm>
                  <h2>JWT</h2>
                  <p className="mt-3 text-medium-emphasis">
                    Provide an admin JWT to register your MetaMask account on this CoLink server!
                  </p>
                  <div className="mb-3">
                    <CFormInput
                      style={{ width: '55%' }}
                      className="mx-auto"
                      type="file"
                      id="formFile"
                      onChange={(e) => {
                        readFromFile(e, setLocalJwtMM)
                      }}
                    />
                  </div>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>JWT</CInputGroupText>
                    <CFormTextarea
                      aria-label="text input"
                      style={{ resize: 'none', height: '100px' }}
                      value={localJwtMM}
                      onChange={(e) => {
                        setLocalJwtMM(e.target.value)
                      }}
                    ></CFormTextarea>
                  </CInputGroup>
                </CForm>
                <CButton
                  color="primary"
                  active
                  tabIndex={-1}
                  onClick={() => createMetaMask(localJwtMM)}
                >
                  Confirm
                </CButton>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CModalBody>
        <CModalFooter>
          <CButton
            color="secondary"
            onClick={() => {
              setVisibleMM(false)
              setVisibleJwt(true)
            }}
          >
            Close
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  )
}

export default Login
