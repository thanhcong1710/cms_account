<template>
  <div class="d-flex content-center min-vh-100">
    <loader :active="loading.processing" :text="loading.text" />
    <CContainer fluid>
      <CRow class="justify-content-center">
        <CCol md="6">
          <CCard class="mx-4 mb-0">
            <CCardBody class="p-4">
              <img src="img/logo_scots.png" class="c-avatar-img " style="max-width: 180px;"/>
              <h1 style="padding: 20px">CHỌN HỆ THỐNG</h1>
              <div class="row">
                <div class="col-sm-6 col-md-4">
                  <div class="card text-white bg-gradient-danger box-switch" @click="loginCRM">
                    <div class="card-body ">
                      <div class="text-value-lg" style="font-size:38px"><i class="fas fa-school"></i></div>
                      <small style="font-size:16px" class="text-muted text-uppercase font-weight-bold"
                        >VẬN HÀNH</small
                      >
                    </div>
                  </div>
                </div>

                <div class="col-sm-6 col-md-4" v-if="roleCCall">
                  <div class="card text-white bg-gradient-success box-switch"  @click="loginLeads(0)">
                    <div class="card-body">
                      <div class="text-value-lg" style="font-size:38px"><i class="fas fa-phone-volume"></i></div>
                      <small style="font-size:16px" class="text-muted text-uppercase font-weight-bold"
                        >CHĂM SÓC KHÁCH HÀNG</small
                      >
                    </div>
                  </div>
                </div>

                <div class="col-sm-6 col-md-4"> 
                  <router-link :to="`/user_detail`">
                  <div class="card text-white bg-gradient-primary box-switch">
                    <div class="card-body">
                      <div class="text-value-lg" style="font-size:38px"><i class="fas fa-user-alt"></i></div>
                      <small style="font-size:16px" class="text-muted text-uppercase font-weight-bold"
                        >TÀI KHOẢN</small
                      >
                    </div>
                  </div>
                  </router-link>
                </div>
                <div class="col-sm-6 col-md-4" v-if="roleCameraAI"> 
                  <div class="card text-white bg-gradient-warning box-switch"  @click="loginLeads(1)">
                    <div class="card-body">
                      <div class="text-value-lg" style="font-size:38px"><i class="fas fa-camera"></i></div>
                      <small style="font-size:16px" class="text-muted text-uppercase font-weight-bold"
                        >CAMERA AI</small
                      >
                    </div>
                  </div>
                </div>
                <p style="color:red;text-align: center;width:100%" v-html="message_error"></p>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import axios from "axios";
import u from "../../utilities/utility";
import loader from "../../components/Loading";
export default {
  name: "Switch",
  components: {
    loader: loader,
  },
  data() {
    return {
      roleCameraAI: false,
      roleCCall: false,
      email: "",
      password: "",
      showMessage: false,
      message: "",
      loading: {
        text: "Đang xử lý dữ liệu...",
        processing: false,
      },
      message_error:"",
    };   
  },
  created() {
    this.roleCameraAI = localStorage.getItem("roles").indexOf("CM")!= -1 || localStorage.getItem("roles").indexOf("admin")!= -1 ? true :false
    this.roleCCall = localStorage.getItem("roles").indexOf("CM")== -1 ? true :false
  },
  methods: {
    loginCRM() {
      this.loading.processing = true;
      u.g("/api/users/login/crm")
        .then((response) => {
          if (response.data.status == 1) {
            window.location.href =  response.data.link_redirect;
          }else{
            this.loading.processing = false;
            this.message_error = response.data.message
          }
        })
        .catch((e) => {
          u.processAuthen(e);
        });
    },
    loginLeads(type){
      this.loading.processing = true;
      u.g("/api/users/login/leads?type="+type)
        .then((response) => {
          if (response.data.status == 1) {
            window.location.href =  response.data.link_redirect;
          }else{
            this.loading.processing = false;
            this.message_error = response.data.message
          }
        })
        .catch((e) => {
          u.processAuthen(e);
        });
    },
  },
};
</script>
<style>
.box-switch{
  height:146px;
  cursor: pointer;
}
.box-switch:hover{
  box-shadow: 0px 2px 3px 3px #bfbcbc;
}
</style>
