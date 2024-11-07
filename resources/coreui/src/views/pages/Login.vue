<template>
  <div class="d-flex content-center min-vh-100">
    <CContainer fluid>
      <CRow class="justify-content-center">
        <CCol md="6">
          <CCard class="mx-4 mb-0">
            <CCardBody class="p-4">
              <CForm @submit.prevent="login" method="POST">
                <img src="img/logo_scots.png" class="c-avatar-img " style="margin-bottom: 20px;max-width: 180px"/>
                <p class="text-muted">Sign In to your account</p>
                <CInput
                  v-model="hrm_id"
                  prependHtml="<i class='cui-user'></i>"
                  placeholder="Mã Nhân Viên"
                  autocomplete="Mã Nhân Viên"
                >
                  <template #prepend-content><CIcon name="cil-user"/></template>
                </CInput>
                <CInput
                  v-model="password"
                  prependHtml="<i class='cui-lock-locked'></i>"
                  placeholder="Mật Khẩu"
                  type="password"
                  autocomplete="Mật Khẩu"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
                <div role="group" class="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="fa fa-phone"></i>
                      </span>
                    </div>
                    <input type="text" v-model="sip_id" placeholder="Đầu số điện thoại" class="form-control">
                  </div>
                </div>
                <CRow>
                  <CCol col="6" class="text-left">
                    <CButton type="submit" color="primary" class="px-4">Login</CButton>
                  </CCol>
                  <CCol col="6" class="text-right">
                    <CButton color="link" class="px-0">Forgot password?</CButton>
                  </CCol>
                </CRow>
              </CForm>
              <p style="color:red">{{message}}</p>
            </CCardBody>
         </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>

import axios from "axios";

    export default {
      name: 'Login',
      data() {
        return {
          hrm_id: '',
          password: '',
          sip_id:'',
          showMessage: false,
          message: '',
        }
      },
      methods: {
        goRegister(){
          this.$router.push({ path: 'register' });
        },
        login() {
          let self = this;
          axios.post(  '/api/login', {
            hrm_id: self.hrm_id,
            password: self.password,
            sip_id:self.sip_id
          }).then(function (response) {
            self.hrm_id = '';
            self.password = '';
            localStorage.setItem("api_token", response.data.access_token);
            localStorage.setItem('roles', response.data.roles);
            if(response.data.change_password==0){
              self.$router.push({ path: '/user_change_password' });
            }else{
              self.$router.push({ path: '/switch' });
            }
          })
          .catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
              self.message = error.response.data.message;
              self.showMessage = true;
            }
          })
        }
      }
    }

</script>
