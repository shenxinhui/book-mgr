<template>
    <div class="auth">
      <div>
        <img src="" alt="">
        <div class="title"></div>
      </div>
      <div class="form">
        <a-tabs default-active-key="1" >
            <a-tab-pane key="1" tab="Tab 1">
              Content of Tab Pane 1
            </a-tab-pane>
            <a-tab-pane key="2" tab="Tab 2" force-render>
              Content of Tab Pane 2
            </a-tab-pane>
            <a-tab-pane key="3" tab="Tab 3">
              Content of Tab Pane 3
            </a-tab-pane>
          </a-tabs>
      </div>
    </div>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
    @import './index.scss';
</style>