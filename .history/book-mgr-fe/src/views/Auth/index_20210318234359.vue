<template>
    <div class="auth">
      <div class="bg"></div>
      <div class="title-info">
        <img src="https://img.zcool.cn/community/01bdd755452b640000019ae9d70a4d.jpg@1280w_1l_2o_100sh.jpg" alt="">
        <h2 class="title">图书管理系统后台</h2>
      </div>
      <div class="form">
        <a-tabs>
            <a-tab-pane tab="登录" key="1">
                <div class="item">
                    <a-input size="large" placeholder="账户"></a-input>
                </div>
                <div class="item">
                    <a-input size="large" placeholder="密码"></a-input>
                </div>
                <div class="item">
                    <a href="">忘记密码</a>
                </div>
                <div class="item">
                    <a-button size="large" type="primary">登入</a-button>
                </div>
            </a-tab-pane>
            <a-tab-pane tab="注册" key="2">
              register
            </a-tab-pane>
          </a-tabs>
      </div>
    </div>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
    @import './index.scss';
</style>