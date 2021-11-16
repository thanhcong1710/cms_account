<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <loader :active="loading.processing" :text="loading.text" />
          <div class="card-header">
            <strong>Đổi mật khẩu </strong>
          </div>
          <div class="card-body">
            <form action method="post">
              <div class="row">
                <div class="col-sm-6">
                  <div class="row no-margin">
                    <div class="form-group col-sm-12">
                      <label for="nf-email">Mật khẩu cũ</label>
                      <input
                        class="form-control"
                        type="password"
                        name="title"
                        v-model="user_info.curr_pass"
                      />
                    </div>
                    <div class="form-group col-sm-12">
                      <label for="nf-email" >Mật khẩu mới</label>
                      <input
                        class="form-control"
                        type="password"
                        name="title"
                        v-model="user_info.pass"
                      />
                    </div>
                    <div class="form-group col-sm-12">
                      <label for="nf-email">Nhắc lại mật khẩu mới</label>
                      <input
                        class="form-control"
                        type="password"
                        name="title"
                        v-model="user_info.re_pass"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="card-footer">
            <router-link class="btn btn-danger" :to="`/user_detail`">
              <i class="fas fa-undo-alt"></i> Hủy
            </router-link>
            <button class="btn btn-success" type="button" @click="save">
              <i class="fas fa-save"></i> Đổi mật khẩu
            </button>
          </div>
        </div>
      </div>
    </div>
    <CModal
      :title="modal.title"
      :show.sync="modal.show"
      :color="modal.color"
      :closeOnBackdrop="modal.closeOnBackdrop"
    >
      <div v-html="modal.body"></div>
      <template #header>
        <h5 class="modal-title">{{ modal.title }}</h5>
      </template>
      <template #footer>
        <CButton :color="'btn btn-' + modal.color" @click="exit" type="button"
          >Đóng</CButton
        >
      </template>
    </CModal>
  </div>
</template>

<script>
import axios from "axios";
import u from "../../utilities/utility";
import loader from "../../components/Loading";
import datepicker from "vue2-datepicker";
import moment from 'moment';
import select from 'vue-select'

export default {
  components: {
    loader: loader,
    datepicker,
    "vue-select": select
  },
  name: "Add-Product",
  data() {
    return {
        loading: {
          text: "Đang tải dữ liệu...",
          processing: false,
        },
        modal: {
          title: "THÔNG BÁO",
          show: false,
          color: "success",
          body: "Thêm mới nhân viên thành công",
          closeOnBackdrop: false,
          action_exit: "exit",
        },
        user_info:{
          curr_pass:'',
          pass:'',
          re_pass:'',
        } 
    }
  },
  created() {
     
  },
  methods: {
    save() {
      let mess = "";
      let resp = true;
      if (this.user_info.curr_pass == "") {
        mess += " - Nhập mật khẩu cũ<br/>";
        resp = false;
      }
      if (this.user_info.pass == "") {
        mess += " - Nhập mật khẩu mới<br/>";
        resp = false;
      }
      if (this.user_info.pass != this.user_info.re_pass ) {
        mess += " - Mật khẩu mới không giống nhau<br/>";
        resp = false;
      }
      if (!resp) {
        this.modal.color = "warning";
        this.modal.body = mess;
        this.modal.show = true;
        this.modal.action_exit = "close";
        return false;
      }
      this.loading.processing = true;
      u.p(`/api/user_change_password`,this.user_info)
        .then((response) => {
          this.loading.processing = false;
          if (response.data.status == 1) {
            this.modal.color = "success";
            this.modal.body = "Đổi mật khẩu thành công";
            this.modal.show = true;
            this.modal.action_exit = "exit";
          }else{
            this.modal.color = "warning";
            this.modal.body = response.data.message;
            this.modal.show = true;
            this.modal.action_exit = "close";
          }
        })
        .catch((e) => {
          u.processAuthen(e);
        });
    },
    exit() {
      if (this.modal.action_exit == "exit") {
        this.$router.push({ path: "/user_detail" });
      } else {
        this.modal.show = false;
      }
    },
  },
};
</script>