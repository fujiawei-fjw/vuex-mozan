<template>
  <div class="footer">
    <div class="aboutUs">
      <div class="inner">
        <div class="footerNav">
          <h5>帮助信息</h5>
          <div>
            <ul>
              <li>
                <span class="iconfont icon-zhinan"></span>
                <span>购物指南</span>
              </li>
              <li>
                <span class="iconfont icon-weibiaoti-"></span>
                <span>服务中心</span>
              </li>
              <li>
                <span class="iconfont icon-zhifufangshi"></span>
                <span>支付方式</span>
              </li>
              <li>
                <span class="iconfont icon-guanyuwomen"></span>
                <span>关于我们</span>
              </li>
              <li>
                <span class="iconfont icon-peisongfangshi"></span>
                <span>配送方式</span>
              </li>
              <li>
                <span class="iconfont icon-benzi"></span>
                <span>免责条款</span>
              </li>
              <li>
                <span class="iconfont icon-help"></span>
                <span>售后服务</span>
              </li>
              <li>
                <span class="iconfont icon-youqinglianjie"></span>
                <span>友情链接</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="foucusUs">
          <h5>关注我们</h5>
          <div>
            <div>
              <img src="./../assets/images/wx.jpg" alt />
              <span class="iconfot"></span>
            </div>
            <div>
              <img src="./../assets/images/wx.jpg" alt />
              <span class="iconfot"></span>
            </div>
          </div>
        </div>
        <div class="phone">
          <h5>客服热线</h5>
          <div>
            <div>
              <span class="iconfont icon-weibiaoti-"></span>
            </div>
            <div>
              <p>400 113 5353</p>
              <p>[周一至周五 9:00-18:00]</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="design">
      <div class="inner">
        <div>
          <img src="./../assets/images/logo.png" alt />
        </div>
        <div>
          <p>北京开普乐科技有限公司©版权所有 Copyright 2015-2025 Morethan.cc All rights res</p>
          <p>地址：北京市朝阳区建国路93号院4号楼4层505</p>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "bottom"
};
</script>

<style>
.footer > .aboutUs {
  background: #000;
}
.footer > .design {
  background: #2b2e33;
}
.footer .aboutUs ul {
  margin: 0;
  padding: 0;
}
.footer .aboutUs > .inner {
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
}
.footer .aboutUs li span:first-child {
  color: rgba(255, 217, 0, 0.836);
  font-size: 16px;
}
.footer .aboutUs li > span:last-child {
  color: #fff;
  font-size: 16px;
  padding-left: 10px;
}
.footer .aboutUs h5 {
  font-size: 18px;
  margin: 15px 0;
}
.footer .aboutUs h5,
.footer .aboutUs li,
.footer p {
  color: rgb(231, 231, 231);
}
.footer .aboutUs li {
  margin: 5px 0;
  display: flex;
  align-items: center;
}
.footer .footerNav ul {
  width: 200px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.footer .aboutUs .foucusUs > div {
  display: flex;
  align-items: center;
}
.footer .aboutUs .foucusUs > div > div {
  margin-right: 20px;
}
.footer .aboutUs .foucusUs > div img {
  width: 100%;
  display: flex;
}
.footer .aboutUs .phone span {
  color: rgba(255, 217, 0, 0.836);
  font-size: 24px;
  font-weight: bold;
  line-height: 42px;
}
.footer .aboutUs .phone > div {
  display: flex;
}
.footer .aboutUs .phone > div p {
  margin: 0;
  padding: 0;
}
.footer .aboutUs .phone > div p:last-child {
  font-size: 14px;
  color: rgb(216, 215, 215);
}
.footer .design > .inner {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  position: relative;
  left: -10px;
}

.footer .design > .inner p {
  text-align: right;
  color: rgba(170, 169, 169, 0.836);
  font-size: 12px;
  margin: 0;
  line-height: 30px;
}
</style>  