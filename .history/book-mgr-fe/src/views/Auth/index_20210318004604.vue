<template>
    <div class="auth">
      <div class="title-info">
        <img src="" alt="">
        <div class="title">图书管理系统后台</div>
      </div>
      <div class="form">
        <a-tabs>
            <a-tab-pane tab="登录" key="1">
                <div class="item">
                    <a-input placeholder="账户"></a-input>
                </div>
                <div class="item">
                    <a-input placeholder="密码"></a-input>
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