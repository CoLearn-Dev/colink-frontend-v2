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

const Login = () => {
  const [visible, setVisible] = useState(false)
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
                          { label: 'https://test-1.colink-server.colearn.cloud/', value: '1' },
                          { label: 'https://test-2.colink-server.colearn.cloud/', value: '2' },
                        ]}
                      />
                    </CInputGroup>
                    <h4>Custom Address</h4>
                    <CInputGroup className="mb-3" style={{ width: '80%', marginLeft: '10%' }}>
                      <CInputGroupText>
                        <CIcon icon={cilGlobeAlt} />
                      </CInputGroupText>
                      <CFormInput placeholder="Custom Address" autoComplete="username" />
                    </CInputGroup>
                  </CForm>
                  <CButton
                    color="primary"
                    active
                    tabIndex={-1}
                    onClick={() => setVisible(!visible)}
                  >
                    Connect
                  </CButton>
                </CCardBody>
              </CCard>
              {/* <CCard className="text-white bg-primary p-4" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Official Servers</h2>
                    <p className="mt-3">
                      Connect to one of our default CoLink servers from the dropdown menu!
                    </p>
                    <CFormSelect
                      className="mx-auto mt-3"
                      style={{ width: '75%' }}
                      aria-label="Default select example"
                      options={[
                        '-- select server address --',
                        { label: 'https://test-1.colink-server.colearn.cloud/', value: '1' },
                        { label: 'https://test-2.colink-server.colearn.cloud/', value: '2' },
                      ]}
                    />
                  </div>
                  <CButton
                    className="mt-3"
                    active
                    tabIndex={-1}
                    onClick={() => setVisible(!visible)}
                  >
                    Connect
                  </CButton>
                </CCardBody>
              </CCard> */}
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>

      <CModal size="xl" visible={visible} onClose={() => setVisible(false)} alignment="center">
        <CModalHeader>
          <CModalTitle>Credentials</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p className="text-center">Specify your JWT or use Metamask to connect to the server.</p>
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
                    />
                  </div>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>JWT</CInputGroupText>
                    <CFormTextarea
                      aria-label="text input"
                      style={{ resize: 'none', height: '150px' }}
                    ></CFormTextarea>
                  </CInputGroup>
                </CForm>
                <CButton color="primary" active tabIndex={-1} onClick={() => setVisible(!visible)}>
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
                  <CButton active tabIndex={-1} onClick={() => setVisible(!visible)}>
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
    </div>
  )
}

export default Login
