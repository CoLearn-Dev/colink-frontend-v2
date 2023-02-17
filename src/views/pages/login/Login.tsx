import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
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
} from 'src/lib'

const Login = () => {
  const [visible, setVisible] = useState(false)
  const [visibleMM, setVisibleMM] = useState(false)

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
      })
  }

  async function createMetaMask(jwt: string) {
    await generateJwtMetaMask(client, jwt, consentMM)
      .then((data: UserData) => {
        loginWithJwt(data.userJwt)
        setVisibleMM(false)
        setVisible(false)
      })
      .catch((err: Error) => {
        alert(err)
      })
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={5}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody className="text-center">
                  <CForm>
                    <h1 className="mb-3">Welcome to CoLink</h1>
                    <p className="text-medium-emphasis mb-3">
                      Connect to one of our default CoLink servers, or specify your own address
                      below!
                    </p>
                    <hr />
                    <h4>Official Servers</h4>
                    <CInputGroup className="mb-3" style={{ width: '80%', marginLeft: '10%' }}>
                      <CInputGroupText>
                        <CIcon icon={cilGlobeAlt} />
                      </CInputGroupText>
                      <CFormSelect
                        className="mx-auto"
                        style={{ width: '80%' }}
                        aria-label="Default select"
                        options={[
                          { label: '' },
                          {
                            label: 'https://test-1.colink-server.colearn.cloud/',
                            value: 'https://test-1.colink-server.colearn.cloud/',
                          },
                          {
                            label: 'https://test-2.colink-server.colearn.cloud/',
                            value: 'https://test-2.colink-server.colearn.cloud/',
                          },
                        ]}
                        onChange={(e) => {
                          setLocalAddress(e.target.value)
                        }}
                      />
                    </CInputGroup>
                    <h4>Custom Address</h4>
                    <CInputGroup className="mb-3" style={{ width: '80%', marginLeft: '10%' }}>
                      <CInputGroupText>
                        <CIcon icon={cilGlobeAlt} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Custom Address"
                        onChange={(e) => {
                          setLocalAddress(e.target.value)
                        }}
                      />
                    </CInputGroup>
                  </CForm>
                  <CButton
                    color="primary"
                    active
                    tabIndex={-1}
                    onClick={() => {
                      setVisible(!visible)
                      dispatch(setClient(address))
                      localStorage.setItem('address', address)
                    }}
                  >
                    Connect
                  </CButton>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>

      <CModal
        size="xl"
        backdrop="static"
        visible={visible}
        onClose={() => setVisible(false)}
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
          <CButton color="secondary" onClick={() => setVisible(false)}>
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
          <CModalTitle>Account not Registered</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CCardGroup>
            <CCard className="p-4">
              <CCardBody className="text-center">
                <CForm>
                  <h2>JWT</h2>
                  <p className="mt-3 text-medium-emphasis">
                    Provide an admin JWT to register your new MetaMask account!
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
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  )
}

export default Login
