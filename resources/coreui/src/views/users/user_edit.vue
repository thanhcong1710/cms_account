<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <loader :active="loading.processing" :text="loading.text" />
          <div class="card-header">
            <strong>Cập nhật khách hàng </strong>
          </div>
          <div class="card-body">
            <form action method="post">
              <div class="row">
                <div class="col-sm-6">
                  <div class="row no-margin">
                    <div class="form-group col-sm-12">
                      <label for="nf-email">Họ tên <span class="text-danger"> (*)</span></label>
                      <input
                        class="form-control"
                        type="text"
                        name="title"
                        v-model="user_info.name"
                      />
                    </div>
                    <div class="form-group col-sm-12">
                      <label for="nf-email" >Điện thoại <span class="text-danger"> (*)</span></label>
                      <input
                        class="form-control"
                        type="text"
                        name="title"
                        v-model="user_info.phone"
                      />
                    </div>
                    <div class="form-group col-sm-12">
                      <label for="nf-email">Email <span class="text-danger"> (*)</span></label>
                      <input
                        class="form-control"
                        type="text"
                        name="title"
                        v-model="user_info.email"
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
              <i class="fas fa-save"></i> Cập nhật
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
          name:'',
          email:'',
          phone:'',
        } 
    }
  },
  created() {
    this.loading.processing = true;
    u.g("/api/get_user_info",)
      .then((response) => {
        this.loading.processing = false;
        this.user_info =response.data
      })
      .catch((e) => {
        u.processAuthen(e);
      });
     
  },
  methods: {
    save() {
      let mess = "";
      let resp = true;
      if (this.user_info.name == "") {
        mess += " - Họ tên không được để trống<br/>";
        resp = false;
      }
      if (this.user_info.email == "") {
        mess += " - Email không được để trống<br/>";
        resp = false;
      }
      if (this.user_info.phone == "" || this.user_info.phone =='null') {
        mess += " - Số điện thoại không được để trống<br/>";
        resp = false;
      }
      if (this.user_info.phone != "" && !u.vld.phone(this.user_info.phone)) {
        mess += " - Số điện thoại không đúng định dạng<br/>";
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
      u.p(`/api/update_user_info`,{
        name: this.user_info.name,
        email: this.user_info.email,
        phone:this.user_info.phone
      })
        .then((response) => {
          this.loading.processing = false;
          if (response.status == 200) {
            this.modal.color = "success";
            this.modal.body = "Cập nhật thông tin thành công";
            this.modal.show = true;
            this.modal.action_exit = "exit";
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