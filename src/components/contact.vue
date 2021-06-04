<template>
  <div class="contact" v-if="showPop" @click="close">
      <div class="bbs" @click.stop="show">
          <div class="left">
              <img class="left_pic" src="../assets/image/contact/bbs.png" alt="">
          </div>
          <div class="right">
              <div class="title">
                  留下您的联系方式，让专业顾问帮您答疑解惑
              </div>
              <div class="info">
                  <div class="row">
                      <div class="label">姓名<span style="color:red">*</span></div>
                      <input v-model="name" class="input" type="text" placeholder="请输入您的姓名">
                  </div>
                  <div class="row">
                      <div class="label">联系方式<span style="color:red">*</span></div>
                      <input v-model="mobile" class="input" type="text" placeholder="请输入您的手机号码">
                  </div>
              </div>
              <div class="message">
                  <div class="row">
                      <div class="label">留言（请在此输入您的需求以及疑问）</div>
                      <textarea v-model="content" class="input value" placeholder="请输入您的需求以及疑问"></textarea>
                  </div>
              </div>
              <div class="btn_box">
                  <div class="btn" @click="submit">
                      确认提交
                  </div>
              </div>
          </div>
      </div>
      <div class="confirm" v-if="tips" @click.stop="show">
          <div class="confirm_box">
              <div class="confirm_text">{{tipMsg}}</div>
              <div class="confirm_btn" @click.stop="commit">确定</div>
          </div>
      </div>
  </div>
</template>

<script>
import Contact from '@/api/contact'
export default {
    data () {
        return {
            mobile: '',
            name: '',
            content: '',
            tips: false,
            tipMsg: '信息已提交成功，请留意近期来电',
            showPop: true
        }
    },
    methods: {
        close () {
            this.mobile = ''
            this.name = ''
            this.content = ''
            this.$emit('close')
        },
        show () {
            this.$emit('show')
        },
        commit () {
            this.tips = false
            if (this.succes) {
                this.$emit('close')
            }
        },
        submit () {
            document.documentElement.scrollTop = 0
            if (this.name.replace(/\s+/g, '') === '') {
                this.tipMsg = '请输入姓名'
                this.tips = true
                return false
            }
            if (this.mobile.replace(/\s+/g, '') === '') {
                this.tipMsg = '请输入电话号码'
                this.tips = true
                return false
            } else {
                const reg = /^((0\d{2,3}-\d{7,8})|(1[3456789]\d{9}))$/
                if (!reg.test(this.mobile)) {
                    this.tipMsg = '请输入正确的电话号码'
                    this.tips = true
                    return false
                }
            }
            const obj = {
                mobile: this.mobile,
                name: this.name,
                content: this.content,
                sourceWeb: '东莞军民融合协同创新平台'
            }
            Contact.sendMsg(obj).then(res => {
                const { errno } = res
                if (errno === 0) {
                    this.tipMsg = '信息已提交成功，请留意近期来电'
                    this.succes = true
                    this.tips = true
                }
            })
        }
    }
}
</script>

<style lang='scss' scoped>
.input{
    background: #F5F5F5;
    outline: none;
    border: none;
    border-radius: 4px;
    padding: 10px;
    font-size: 14px;
    &:focus{
        border: none;
        border: none;
    }
}
.contact{
    height: 100%;
    width: 100%;
    background: rgba($color: #000000, $alpha: .6);
    z-index: 9999;
    position: relative;
    display: flex;
    justify-content: center;
    padding-top: 10%;
    box-sizing: border-box;
    .bbs{
        border-radius: 6px;
        box-sizing: border-box;
        height: 610px;
        width: 928px;
        position: absolute;
        background-color: #fff;
        display: flex;
        .left{
            width: 260px;
            .left_pic{
                height: 260px;
                height: auto;
            }
        }
        .right{
            flex: 1;
            margin: 35px 40px;
            color: #666;
            .title{
                font-weight: 700;
                padding-bottom: 30px;
                border-bottom: 1px solid #e2e2e2;
                text-align: center;
            }
            .info{
                padding-top: 40px;
                display: flex;
                text-align: left;
                .row:last-child{
                    padding-left: 50px;
                }
                .row{
                    width: 274px;
                    .label{
                        padding-bottom: 15px;
                    }
                }
            }
            .message{
                margin: 50px 0 30px 0;
                display: flex;
                .row{
                    width: 274px;
                    .label{
                        padding-bottom: 15px;
                    }
                    .value{
                        width: 588px;
                        height: 213px;
                        box-sizing: border-box;
                        padding: 20px 30px 20px 20px;
                        line-height: 24px;
                    }
                }
            }
            .btn{
                text-align: center;
                line-height: 42px;
                background-color: $mainColor;
                border-radius: 4px;
                cursor: pointer;
                color: #fff;
                width: 118px;
                height: 42px;
                margin-left: 43%;
            }
        }
    }
    .confirm{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 20px;
        .confirm_box{
            width: 400px;
            height: 100px;
            margin: 0 auto;
            background-color: #fff;
            border-radius: 4px;
            text-align: center;
            padding-top: 20px;
            box-sizing: border-box;
        }
        .confirm_text{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .confirm_btn{
            border-radius: 4px;
            background-color: #409EFF;
            color: #fff;
            height: 28px;
            line-height: 28px;
            width: 80px;
            margin: 15px auto 0px;
            cursor: pointer;
            &:hover{
                background-color: #63b0fd;
            }
        }
    }
}
</style>
