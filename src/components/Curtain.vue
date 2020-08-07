<template>
  <main>
    <div id="printHtml">
    <el-form :model="form1" label-position="top">
      <div class="label-title">1.开法是以下哪一种</div>
      <el-form-item  label="">
        <el-image src="static/images/single.png" fit="fill"></el-image>
        <el-switch @change="changeSwitch('1')" v-model="form1.openType" active-text="单开" inactive-text="双开"> </el-switch>
        <!-- <el-radio-group v-model="form1.resource">
          <el-radio label="单开"></el-radio>
          <el-radio label="双开"></el-radio>
        </el-radio-group> -->
        <el-image src="static/images/double.png" fit="fill"></el-image>
      </el-form-item>
      <div class="label-title">2.请选择 是透光窗帘还是遮光窗帘</div>
        <el-form-item  label="">
        <el-switch  @change="changeSwitch('2')"  v-model="form1.curtainType" active-text="遮光" inactive-text="透光"> </el-switch>
      </el-form-item>
      <!-- <div class="label-title">3.安装方法是以下哪种</div>
        <el-form-item  label="">
        <el-switch v-model="openType" active-text="正面钩挂" inactive-text="天井钩挂"> </el-switch>
      </el-form-item> -->
    </el-form>
    <div class="label-title">3.请选择 商品</div>
    <!--请选择 商品  start-->
    <el-form ref="form"  :model="form3" label-width="90px" :rules="rules">
      <!--第一行-->
      <el-row :gutter="20">
        <!-- JAN start-->
        <el-col :span="8">
          <el-form-item label="JAN:">
            <el-select v-model="form3.jan" placeholder="" filterable @change="changeJan(form3.jan)">
              <el-option  v-for="(item, index) in janSelect" :key="index" :label="item.GoodId" :value="item"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <!-- JAN end-->
        <!-- 日本商品名 start-->
        <el-col :span="8">
          <el-form-item label="日本商品名:">
            <el-input :disabled="true"   v-model="form3.jpName"></el-input>
          </el-form-item>
        </el-col>
        <!-- 日本商品名 end-->
        <!-- 中文商品名 start-->
        <el-col :span="8">
          <el-form-item label="中文商品名:">
            <el-input :disabled="true"  v-model="form3.cnName" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
        <!-- 中文商品名 end-->

      </el-row>
      <el-row :gutter="20">
        <!-- 规格范围 start-->
        <el-col :span="8">
          <el-form-item label="规格范围:">
            <el-input :disabled="true"  v-model="form3.size" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
        <!-- 规格范围 end-->
        <!-- 数量 start-->
        <el-col :span="8">
          <el-form-item label="数量:"  prop="amount">
            <el-input @change="changeAmount" type="number"  v-model="form3.amount" ></el-input>
          </el-form-item>
        </el-col>
        <!-- 数量 end-->
      </el-row>
    </el-form>
    <!--请选择 商品  end-->
    <!--确定尺寸  start-->
    <el-form :model="form4" label-position="top">
      <div class="label-title">4.确定尺寸</div>
      <el-form-item label="" >
        <!--宽度 start-->
        <div class="curtain-table">
          <div class="left">
            <!---宽度 start-->
            <div class="left_first">宽度</div>
            <div class="left_second">
              <!-- item 1-->
              <div class="left_seond_item">
                <div class="item_left">腰<br>窗</div>
                <div class="item_middle">
                  <el-image style="width: 100px; height: 100px" src="static/images/1.png" fit="fill"></el-image>
                  <div>测量从窗帘轨道一端到另一端的距离。</div>
                </div>
                <div class="item_right item_right_input">
                  <el-radio-group v-model="form4.select">
                    <el-radio @change="selectChange" label="腰窗"></el-radio>
                  </el-radio-group>
                </div>
              </div>
              <!-- item 1 end-->
              <!-- item 2-->
              <div class="left_seond_item">
                <div class="item_left">落<br>地<br>窗</div>
                <div class="item_middle">
                  <el-image style="width: 100px; height: 100px" src="static/images/1.jpg" fit="fill"></el-image>
                  <div>测量从窗帘轨道一端到另一端的距离。</div>
                </div>
                <div class="item_right item_right_input">
                 <el-radio-group v-model="form4.select">
                    <el-radio @change="selectChange" label="落地窗"></el-radio>
                  </el-radio-group>
                </div>
              </div>
              <!-- item 2 end-->
              <!-- item 3-->
              <div class="left_seond_item item_right_input">
                <div class="item_left">飘<br>窗</div>
                <div class="item_middle">
                  <el-image style="width: 100px; height: 100px" src="static/images/2.jpg" fit="fill"></el-image>
                  <div>测量从窗帘轨道一端到另一端的距离。</div>
                </div>
                <div class="item_right">
                  <el-radio-group v-model="form4.select">
                    <el-radio @change="selectChange" label="飘窗"></el-radio>
                  </el-radio-group>
                  <!--  <el-input v-model.number="shortWindowWidth"><i slot="suffix">cm</i></el-input> -->
                </div>
              </div>
              <!-- item 3 end-->
            </div>
            <!--宽度 end-->
          </div>
          <!--箭头 start-->
          <div class="rocket"></div>
          <!--箭头 end-->
          <!--middle start-->
          <div class="middle">
            <div class="middle_left item_left">褶<br>皱</div>
            <div class="middle_right">
              <div class="middle_right_item1">
                <div class="item1_left">单开</div>
                <div class="item1_right">
                  <el-input :disabled="!form1.openType" @change="changeOpenResult(form4.singleOpen)" type="number" v-model="form4.singleOpen"><i slot="suffix">X 1.05</i></el-input>
                </div>
              </div>
              <div class="middle_right_item1">
                <div class="item1_left">双开</div>
                <div class="item1_right">
                  <el-input :disabled="form1.openType" @change="changeOpenResult(form4.doubleOpen)" type="number" v-model="form4.doubleOpen"><i slot="suffix">X 1.05/2</i></el-input>
                </div>
              </div>
            </div>
          </div>
          <!--middle end-->
          <!--箭头 start-->
          <div class="double-rocket">
            <div class="rocket"></div>
            <div class="rocket"></div>
          </div>
          <!--箭头 end-->
          <!--right start-->
          <div class="right">
            <div class="middle_right">
              <div class="middle_right_item1">
                <div class="item1_right">
                  <el-input class="input-br-none" readonly="readonly" unselectable='on' v-model="form4.singleOpenResult"><i slot="suffix">cm</i></el-input>
                </div>
              </div>
              <div class="middle_right_item1">
                <div class="item1_right">
                  <el-input class="input-br-none" :readonly="true" unselectable='on' v-model="form4.doubleOpenResult"><i slot="suffix">cm</i></el-input>
                </div>
              </div>
            </div>
          </div>
          <!--right end-->
        </div>
        <!--宽度 end-->
        <!--长度 start-->
        <div class="curtain-table">
          <div class="left">
            <!---长度 left start-->
            <div class="left_first">长度</div>
            <div class="left_second">
              <!-- item 1-->
              <div class="left_seond_item">
                <div class="item_left">腰<br>窗</div>
                <div class="item_middle">
                  <el-image style="width: 100px; height: 100px" src="static/images/3.jpg" fit="fill"></el-image>
                  <div>测量从窗帘轨道一端到另一端的距离。</div>
                </div>
                <div class="item_right item_right_input">
                  <!-- <el-input type="number" v-model="middleWindowLength"><i slot="suffix">cm</i></el-input> -->
                  <el-radio-group v-model="form4.select">
                    <el-radio @change="selectChange" label="腰窗"></el-radio>
                  </el-radio-group>
                </div>
              </div>
              <!-- item 1 end-->
              <!-- item 2-->
              <div class="left_seond_item">
                <div class="item_left">落<br>地<br>窗</div>
                <div class="item_middle">
                  <el-image style="width: 100px; height: 100px" src="static/images/4.jpg" fit="fill"></el-image>
                  <div>测量从窗帘轨道一端到另一端的距离。</div>
                </div>
                <div class="item_right item_right_input">
                  <!-- <el-input v-model.number="longWindowLength"><i slot="suffix">cm</i></el-input> -->
                  <el-radio-group v-model="form4.select">
                    <el-radio @change="selectChange" label="落地窗"></el-radio>
                  </el-radio-group>
                </div>
              </div>
              <!-- item 2 end-->
              <!-- item 3-->
              <div class="left_seond_item">
                <div class="item_left">飘<br>窗</div>
                <div class="item_middle">
                  <el-image style="width: 100px; height: 100px" src="static/images/5.jpg" fit="fill"></el-image>
                  <div>测量从窗帘轨道一端到另一端的距离。</div>
                </div>
                <div class="item_right item_right_input">
                  <!-- <el-input v-model.number="shortWindowLength"><i slot="suffix">cm</i></el-input> -->
                  <el-radio-group v-model="form4.select">
                    <el-radio @change="selectChange" label="飘窗"></el-radio>
                  </el-radio-group>
                </div>
              </div>
              <!-- item 3 end-->
            </div>
            <!--长度 left end-->
          </div>
          <!--箭头 start-->
          <div class="rocket"></div>
          <div class="left length-left">
            <!---长度 middle start-->
            <div class="left_second">
              <!-- item 1-->
              <div class="left_seond_item">
                <div class="item_left">腰<br>窗</div>
                <div class="item_middle left_item_middle">
                  <el-input @change="change(form4.middleWindowLength)" :disabled="form4.select === '落地窗' || form4.select === '飘窗'" type="number" v-model="form4.middleWindowLength"></el-input>
                  <div>请在测量长度基础上增加15-20cm</div>
                </div>
              </div>
              <!-- item 1 end-->
              <!-- item 2-->
              <div class="left_seond_item">
                <div class="item_left">落<br>地<br>窗</div>
                <div class="item_middle left_item_middle">
                  <el-input  @change="change(form4.longWindowLength)"  :disabled="form4.select === '腰窗' || form4.select === '飘窗'"  type="number" v-model="form4.longWindowLength"></el-input>
                  <div>请在测量长度基础上减少2cm</div>
                </div>
              </div>
              <!-- item 2 end-->
              <!-- item 3-->
              <div class="left_seond_item">
                <div class="item_left">飘<br>窗</div>
                <div class="item_middle left_item_middle">
                  <el-input @change="change(form4.shortWindowLength)"  :disabled="form4.select === '落地窗' || form4.select === '腰窗'"  type="number" v-model="form4.shortWindowLength"></el-input>
                  <div>请在测量长度基础上减少2cm</div>
                </div>
              </div>
              <!-- item 3 end-->
            </div>
            <!--长度 middle end-->
          </div>
          <!--箭头 end-->
          <!--箭头 start-->
          <div class="three-rocket" v-if="form1.curtainType">
            <div class="rocket"></div>
            <div class="rocket"></div>
            <div class="rocket"></div>
          </div>
          <!--箭头 end-->
          <div class="left length-right" v-if="form1.curtainType">
          <!---长度 right start-->
          <div class="left_second" >
            <!-- item 1-->
            <div class="left_seond_item">
              <div class="item_right item_right_input_small">
                <div class="item-right_title">遮光窗帘</div>
                <el-input :readonly="true" unselectable='on' v-model="form4.middleWindowLengthResult"><i slot="suffix">cm</i></el-input>
              </div>
            </div>
            <!-- item 1 end-->
            <!-- item 2-->
            <div class="left_seond_item">
              <div class="item_right item_right_input_small">
                <div class="item-right_title">遮光窗帘</div>
                <el-input :readonly="true" unselectable='on' v-model="form4.longWindowLengthResult"><i slot="suffix">cm</i></el-input>
              </div>
            </div>
            <!-- item 2 end-->
            <!-- item 3-->
            <div class="left_seond_item ">
              <div class="item_right item_right_input_small">
                <div class="item-right_title">遮光窗帘</div>
                <el-input :readonly="true" unselectable='on' v-model="form4.shortWindowLengthResult"><i slot="suffix">cm</i></el-input>
              </div>
            </div>
            <!-- item 3 end-->
          </div>
          <!--长度 right end-->
          </div>
          <div class="rocket-group" v-if="!form1.curtainType">
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
          </div>
          <div class="left length-right" v-if="!form1.curtainType">
            <!---长度 right start-->
            <div class="left_second">
              <!-- item 1-->
              <div class="left_seond_item">
                <div class="item_right item_right_input_small">
                  <div class="item-right_title">透光窗帘</div>
                  <el-input :readonly="true" unselectable='on' v-model="form4.middleWindowLengthResult1"><i slot="suffix">cm</i></el-input>
                </div>
              </div>
              <!-- item 1 end-->
              <!-- item 2-->
              <div class="left_seond_item">
                <div class="item_right item_right_input_small">
                  <div class="item-right_title">透光窗帘</div>
                  <el-input :readonly="true" unselectable='on' v-model="form4.longWindowLengthResult1"><i slot="suffix">cm</i></el-input>
                </div>
              </div>
              <!-- item 2 end-->
              <!-- item 3-->
              <div class="left_seond_item">
                <div class="item_right item_right_input_small">
                  <div class="item-right_title">透光窗帘</div>
                  <el-input :readonly="true" unselectable='on' v-model="form4.shortWindowLengthResult1"><i slot="suffix">cm</i></el-input>
                </div>
              </div>
              <!-- item 3 end-->
            </div>
            <!--长度 right end-->
          </div>
        </div>
        <!--长度  end-->
      </el-form-item>
    </el-form>
    <!--确定尺寸  end-->
    <div class="d-flex">
    <!--安装方法 start-->
    <el-form style="min-width: 37%">
      <div class="label-title">5.安装方法是以下哪种</div>
      <!-- <div class="text-left">遮光窗帘</div> -->
      <el-form-item label="">
        <el-image height="140px" width="80px" src="static/images/7.jpg" fit="fill"></el-image>
        <el-switch @change="changeMethod" v-model="installMethod" active-text="正面钩挂" inactive-text="天井钩挂"> </el-switch>
        <el-image  height="140px" width="80px" src="static/images/6.jpg" fit="fill"></el-image>
      </el-form-item>
      <!-- <div class="text-left">透光窗帘</div>
      <el-form-item label="">
        <el-image src="../../static/images/single.png" fit="fill"></el-image>
        <el-switch v-model="value1" active-text="正面钩挂" inactive-text="天井钩挂"> </el-switch>
        <el-image src="../../static/images/single.png" fit="fill"></el-image>
      </el-form-item> -->
    </el-form>
    <!--安装方法 end-->
    <!--注意事项的确认 start-->
    <el-form class="form6">
      <div class="label-title">6注意事项的确认</div>
      <div class="text-left mt20">
        <el-checkbox :disabled="true"  label="制作需要4-5周时间。"></el-checkbox>
      </div>
      <div class="text-left mt20">
        <el-checkbox :disabled="true"  label="由于是订制生产、先支付货款，所以下单后不可取消、变更、退货。" size="medium"></el-checkbox>
      </div>
      <div class="text-left mt20 ">
        <el-checkbox :disabled="true"  label="由于面料特性和湿度等原因，以下事项请理解。" size="medium"></el-checkbox>
        <ul class="pl40">
          <li>成品尺寸可能发生+-1cm左右的误差。</li>
          <li>湿度大的时期，面料可能发生少许伸长。</li>
          <li>洗涤后会发生少许的手感变化和缩水。</li>
        </ul>
      </div>
      <div class="text-left mt20">
        <el-checkbox :disabled="true" label="成品尺寸是正面钩挂+4cm / 天井钩挂+1cm。" size="medium"></el-checkbox>
      </div>
      <div class="text-left mt20">
        <el-checkbox :disabled="true" label="部分尺寸窗帘需要面料拼接。" size="medium"></el-checkbox>
        <ul class="pl40">
          <li>遮光窗帘:宽度101cm以上。</li>
        </ul>
      </div>
      <div class="order-sheet-bottom_right">
        <div>追记:<input v-model="remark" type="text"></div>
      </div>
    </el-form>
    <!--注意事项的确认 end-->
    </div>
    <!--订制窗帘尺寸确认表 start-->
    <div class="confirm-table_title">订制窗帘尺寸确认表</div>
      <div class="confirm-table_body">
        <!--遮光 start-->
        <div class="table_body_content">
          <div v-if="form1.curtainType" class="item_left">遮<br>光<br>窗<br>帘</div>
          <div v-if="!form1.curtainType"  class="item_left">透<br>光<br>窗<br>帘</div>
          <div class="body_content_fabric">
            <div class="item_left">面料</div>
            <div class="pt20">{{Material}}</div>
          </div>
          <div class="item_left">尺<br>寸</div>
          <div class="table_body_width">
            <div class="item_left">宽度</div>
            <div class="body_width_top">
              <div class="top_title">丈量尺寸</div>
              <div class="top_input">
                <!-- <el-input type="number" v-model="input1"><i slot="suffix">cm</i></el-input> -->
                {{measureWidth}}cm
              </div>
            </div>
            <div class="body_width_top">
              <div class="top_title">下单尺寸</div>
              <div class="top_input">
                {{orderWidth}}cm
                <!-- <el-input type="number" :readonly="true" unselectable='on'  v-model="orderWidth"><i slot="suffix">cm</i></el-input> -->
              </div>
            </div>
            <!-- <div>下单尺寸</div> -->
          </div>
          <div class="table_body_length">
            <div class="item_left">长度</div>
            <div class="body_width_top">
              <div class="top_title">丈量尺寸</div>
              <div class="top_input">
                {{measureLength}}cm
                <!-- <el-input type="number" v-model="input1"><i slot="suffix">cm</i></el-input> -->
              </div>
            </div>
            <div class="body_width_top">
              <div class="top_title">下单尺寸</div>
              <div class="top_input">
                {{orderLength}}cm
                <!-- <el-input type="number" :readonly="true" unselectable='on'  v-model="orderLength"><i slot="suffix">cm</i></el-input> -->
              </div>
            </div>
          </div>
          <div class="table_body_open">
            <div class="item_left">开法/枚数</div>
            <div class="body_top">
              <div class="top_title">{{openType}}</div>
            </div>
            <div class="top_input" style="padding-top: 15px;font-size: 1.2rem;">
              {{Amont}}枚
            </div>
          </div>
          <div class="teble_body_install">
            <div class="item_left">装法</div>
            <div class="body_top">
              <div class="top_title" v-if="installMethod">正面挂钩</div>
            </div>
              <div class="body_top">
              <div class="top_title" v-if="!installMethod">天井挂钩</div>
            </div>
          </div>
          <div class="table_body_pinjie">
            <div class="item_left">拼接</div>
          <div class="body_top">
            <div class="top_title" v-if="splicing == '有'">有</div>
          </div>
            <div class="body_top">
            <div class="top_title" v-if="splicing == '无'">无</div>
          </div>
          </div>
        </div>
        <!--遮光 end-->
        <!--透光 start-->
        <!-- <div class="table_body_content">
          <div class="item_left">透<br>光<br>窗<br>帘</div>
          <div class="body_content_fabric">
            <div class="item_left">面料</div>
            <div>A</div>
          </div>
          <div class="item_left">尺<br>寸</div>
          <div class="table_body_width">
            <div class="item_left">宽度</div>
            <div class="body_width_top">
              <div class="top_title">丈量尺寸</div>
              <div class="top_input">
                <el-input type="number" v-model="input1"><i slot="suffix">cm</i></el-input>
              </div>
            </div>
            <div class="body_width_top">
              <div class="top_title">下单尺寸</div>
              <div class="top_input">
                <el-input type="number" v-model="input1"><i slot="suffix">cm</i></el-input>
              </div>
            </div>
          </div>
          <div class="table_body_length">
            <div class="item_left">长度</div>
            <div class="body_width_top">
              <div class="top_title">丈量尺寸</div>
              <div class="top_input">
                <el-input type="number" v-model="input1"><i slot="suffix">cm</i></el-input>
              </div>
            </div>
            <div class="body_width_top">
              <div class="top_title">下单尺寸</div>
              <div class="top_input">
                <el-input type="number" v-model="input1"><i slot="suffix">cm</i></el-input>
              </div>
            </div>
          </div>
          <div class="table_body_open">
            <div class="item_left">开发/枚数</div>
            <div class="body_top">
              <div class="top_title">单开</div>
            </div>
            <div class="body_top">
              <div class="top_title">枚</div>
            </div>
          </div>
          <div class="teble_body_install">
            <div class="item_left">装法</div>
            <div class="body_top">
              <div class="top_title">正面挂钩</div>
            </div>
              <div class="body_top">
              <div class="top_title">天井挂钩</div>
            </div>
          </div>
          <div class="table_body_pinjie">
            <div class="item_left">拼接</div>
          <div class="body_top">
            <div class="top_title">有</div>
          </div>
            <div class="body_top">
            <div class="top_title">无</div>
          </div>
          </div>
        </div> -->
        <!--透光 end-->
      </div>
      <!--订制窗帘尺寸确认表 end-->
      <el-form class="autograph">
        <div>已确认注意事项,并与顾客确认订单无误</div>
        <div class="order-sheet-bottom_right">
          <div>顾客签字:</div>
        </div>
      </el-form>
      </div>
      <div slot="footer" class="dialog-footer" v-if="!lookInfo">
        <el-button @click="save" class="MUJI_bg">保存</el-button>
        <el-button @click="clickHandle" class="MUJI_bg">返回</el-button>
        <el-button @click="print" class="MUJI_bg">打印</el-button>
        <!-- <el-button class="MUJI_bg">发送订单至POS系统</el-button> -->
        <span>*请于顾客确认后打印此表格</span>
      </div>
      <div slot="footer" class="dialog-footer" v-if="lookInfo">
        <el-button @click="clickHandle" class="MUJI_bg">返回</el-button>
      </div>
  </main>
</template>
<script>
import * as fitter from '../filters/filter'
import * as api from '../api/api'
import { showMsg } from '../http/http'
import { Promise } from 'q';

export default {
  name: 'curtain',
  props: {
    'curtainData': [Object, Array]
  },
  computed: {
  },
  data() {
    // 自定义校验
    var checkNumber = (rule, value, callback) => {
      if (!this.form1.openType) {
        if (value % 2 == 0) {
          callback()
        } else {
            this.form3.amount = ''
            callback(new Error('双开数量必须为2的倍数'))
        }
      }
      if (value <= 0) {
        this.form3.amount = ''
        callback(new Error('数量必须大于0'))
      }
    }
    return {
      form1: {
        openType: false, // 打开方式
        curtainType: false, // 窗帘类型，遮光or透光
      },
      form3: {
        jan: '', // jan
        jpName: '', // 日本商品名
        cnName: '', // 中文商品名
        size: '', // 规格范围
        amount: '', // amount
      },
      form4: {
        select: '腰窗', // 选择窗帘类型宽度
        singleOpen: '', // 单开宽度
        singleOpenResult: '', // 单开宽度计算结果
        doubleOpen: '', // 双开宽度
        doubleOpenResult: '', // 双开宽度计算结果
        middleWindowLength: '', // 腰窗长度
        longWindowLength: '', // 落地窗长度
        shortWindowLength: '', // 飘窗长度
        middleWindowLengthResult: '', // 腰窗长度计算结果(遮光)
        longWindowLengthResult: '', // 落地窗长度计算结果(遮光)
        shortWindowLengthResult: '', // 飘窗长度计算结果(遮光)
        middleWindowLengthResult1: '', // 腰窗长度计算结果(透光)
        longWindowLengthResult1: '', // 落地窗长度计算结果(透光)
        shortWindowLengthResult1: '', // 飘窗长度计算结果(透光)
      },

      installMethod: 'false', // 安装方法
      Material: '', // 面料
      measureWidth: '', // 丈量尺寸（宽）
      measureLength: '', // 丈量尺寸（长）
      orderWidth: '', // 下单尺寸（宽）
      orderLength: '', // 下单尺寸（长）
      openType: '双开', // 开法
      Amont: '', // 枚数
      install: '天井钩挂', // 装法
      splicing: '无', // 是否拼接
      janSelect: [], // jan 下拉数据
      shopCheck: '', // 选中的商品数据
      lookInfo: false,
      remark: '', // 追记
      requestNo: '', // 订单单号
      shopPrice: '', // 商品价格
      shopFactory: '', // 厂工
      // checked3: false
      // multipleTable: [], // 店铺番号选中数据
      // logisticsCompany: '',// 物流公司
      // logisticsOrder: '', // 物流单号
      rules: {
        amount: [
          { validator: checkNumber, trigger: 'blur' }
        ]
      },
    }
  },
  created() {
    // Event.$on('update:count')
    // Event.$on('update:count', () => {
    //   // ++this.count
    // console.log(this.curtainData)

    // })
    // if (this.curtainData) {
    //   this.getDetailDataInit()
    // }
    this.getShoppingData()
  },
  methods: {
    // 获取商品数据
    getShoppingData() {
      const params = {
        StaffNo: sessionStorage.getItem('staffID') || '', // 员工工号
        Id: this.curtainData.Id, //
        GoodShadingOrDransparent: this.curtainData.GoodShadingOrDransparent || '透光'  // 窗帘类型 false : 透光 true 遮光
      }
      api.getJAN(params).then(res => {
        this.janSelect = res.Data.Goods
        this.getDetailDataInit(res.Data)
      })

    },
    // 页面调转获取商品详情数据
    getDetailDataInit(res) {
      let data = res
      this.lookInfo = data.lookInfo
      this.form1.openType = data.OpenType == '单开' ? true : false // 打开方式
      this.form1.curtainType = data.Goods[0].GoodShadingOrDransparent == '遮光' ? true : false // 遮光透光
      this.form3.jan = data.GoodId // 商品jan
      this.form3.jpName = data.GoodNameJp // 商品日文名称
      this.form3.cnName = data.GoodNmaeCn // 商品中文名称
      this.form3.size = data.GoodSpecification // 商品规格
      this.form3.amount = data.Quantity // 商品数量
      this.form4.select = data.CurtainCustomizationType == '' ? '腰窗' : data.CurtainCustomizationType// 窗帘类型
      // 单开双开赋值
      if (data.OpenType == '双开') {
        this.form4.doubleOpen = data.MeasuringWidth // 双开宽度
        this.form4.doubleOpenResult = data.ActualWidth // 双开宽度计算结果
      } else {
        this.form4.singleOpen = data.MeasuringWidth  // 单开宽度
        this.form4.singleOpenResult = data.ActualWidth // 单开宽度计算结果
      }
      // 不同类型窗帘赋值
      if (this.form4.select == '腰窗') {
        this.form4.middleWindowLength = data.MeasuringHeight
        if ( data.GoodShadingOrDransparent == '遮光' ) {
          this.form4.middleWindowLengthResult = data.ActualHeight
        } else {
          this.form4.middleWindowLengthResult1 = data.ActualHeight
        }
      } else if (this.form4.select == '落地窗') {
        this.form4.longWindowLength = data.MeasuringHeight
        if ( data.GoodShadingOrDransparent == '遮光' ) {
          this.form4.longWindowLengthResult = data.ActualHeight
        } else {
          this.form4.longWindowLengthResult1 = data.ActualHeight
        }
      } else if (this.form4.select == '飘窗') {
        this.form4.shortWindowLength = data.ActualHeight
        if ( data.GoodShadingOrDransparent == '遮光' ) {
          this.form4.shortWindowLengthResult = data.ActualHeight
        } else {
          this.form4.shortWindowLengthResult1 = data.ActualHeight
        }
      }
      this.installMethod = data.InstallationType == '正面钩挂' ? true : false // 安装方法
      this.Material = data.GoodFabric // 面料
      this.measureWidth = data.MeasuringWidth // 丈量尺寸（宽）
      this.measureLength = data.MeasuringHeight // 丈量尺寸（长）
      this.orderWidth = data.ActualWidth // 下单尺寸（宽）
      this.orderLength = data.ActualHeight // 下单尺寸（长）
      this.openType = data.OpenType // 开法
      this.Amont = data.Quantity // 枚数
      this.splicing = data.IsSplice // 是否拼接
      this.remark = data.Remarks // 追记
      this.requestNo = data.RequestNo // 订单单号
      this.shopPrice = data.GoodPrice // 商品单价
      this.shopFactory = data.GoodFactory // 厂工
    },
    // num1:单开双开切换 num2:遮光透光切换
    changeSwitch(num) {
      if (num == '1') {
        this.form4.singleOpen = '' // 清空单开宽度的值
        this.form4.doubleOpen = '' // 清空双开宽度的值
        this.form4.singleOpenResult = '' // 清空单开计算后宽度的值
        this.form4.doubleOpenResult = ''// 清空双开计算后宽度的值
        this.form3.amount = '' // 清空商品数量
        if(this.form1.openType) {
          this.openType = '单开'
        } else {
          this.openType = '双开'
        }
      } else if (num == '2') {
        const params = {
          StaffNo: sessionStorage.getItem('staffID') || '', // 员工工号
          Id: this.curtainData.Id, //
          GoodShadingOrDransparent: this.form1.curtainType == false  ? '透光' : '遮光' // 窗帘类型 false : 透光 true 遮光
        }
        api.getJAN(params).then(res => {
          this.janSelect = res.Data.Goods
        })
        this.form4.middleWindowLength = '' // 腰窗长度
        this.form4.longWindowLength = '' // 落地窗长度
        this.form4.shortWindowLength = '' // 飘窗长度
        this.form3.jan = '' // 清空商品 数据
        this.form3.jpName = '' // ...
        this.form3.cnName = '' // ...
        this.form3.size = ''  // ...
        this.form3.amount = ''// 清空商品 end
        this.reset()

      }
    },
    // 单开双开计算结果 结果有小数自动向前进一位
    changeOpenResult(num) {
      if (this.form1.openType) {
        this.form4.singleOpenResult = Math.ceil(Number(num) * 1.05)
        this.orderWidth = Math.ceil(Number(num) * 1.05)  // 单开下单宽度
      } else {
        this.form4.doubleOpenResult = Math.ceil(Number(num) * 1.05 / 2)
        this.orderWidth =  Math.ceil(Number(num) * 1.05 / 2) // 双开下单宽度
      }
        this.measureWidth = Number(num) // 丈量宽度
        if (this.orderWidth > 101) {
          this.splicing = '有'
        } else {
          this.splicing = '无'
        }
    },
    // 窗帘类型发生变化时
    selectChange() {
      this.form4.middleWindowLength = '' // 腰窗长度
      this.form4.longWindowLength = '' // 落地窗长度
      this.form4.shortWindowLength = '' // 飘窗长度
      this.reset()
      // this.form4.middleWindowLengthResult = '' // 腰窗长度计算结果(遮光)
      // this.form4.longWindowLengthResult = '' // 落地窗长度计算结果(遮光)
      // this.form4.shortWindowLengthResult = '' // 飘窗长度计算结果(遮光)
      // this.form4.middleWindowLengthResult1 = '' // 腰窗长度计算结果(透光)
      // this.form4.longWindowLengthResult1 = '' // 落地窗长度计算结果(透光)
      // this.form4.shortWindowLengthResult1 ='' // 飘窗长度计算结果(透光)
    },
    // 窗帘类型发生变化时
    change(num) {
      this.reset()
      if (this.form1.curtainType) { // 遮光计算结果
        if (this.form4.select == '腰窗') {
          this.form4.middleWindowLengthResult = num
        } else if (this.form4.select == '落地窗') {
          this.form4.longWindowLengthResult = num
        } else if (this.form4.select == '飘窗') {
          this.form4.shortWindowLengthResult = num
        }
        this.orderLength = num // 下单宽度
      } else { // 透光计算结果
        if (this.form4.select == '腰窗') {
          this.form4.middleWindowLengthResult1 = Number(num) - 2
        } else if (this.form4.select == '落地窗') {
          this.form4.longWindowLengthResult1 = Number(num) - 2
        } else if (this.form4.select == '飘窗') {
          this.form4.shortWindowLengthResult1 = Number(num) - 2
        }
        this.orderLength = Number(num) - 2 // 下单长度
      }
      this.measureLength = Number(num) // 丈量长度
    },
    // jan 下拉改变
    changeJan(item) {
      this.shopCheck = item // 保存选中的商品数据
      this.form3.jan = item.GoodId // 商品jan
      this.form3.jpName = item.GoodNameJp // 商品日文名称
      this.form3.cnName = item.GoodNmaeCn // 商品中文名称
      this.form3.size = item.GoodSpecification // 商品规格
      this.Material = item.GoodFabric // 商品面料
      this.shopPrice = item.GoodPrice // 商品单价
      this.shopFactory = item.GoodFactory // 厂工
    },
    // 商品数量改变
    changeAmount() {
      this.Amont = this.form3.amount
    },
    // 钩挂切换
    changeMethod() {

    },
    // 重置数据方法
    reset() {
      this.form4.middleWindowLengthResult = '' // 腰窗长度计算结果(遮光)
      this.form4.longWindowLengthResult = '' // 落地窗长度计算结果(遮光)
      this.form4.shortWindowLengthResult = '' // 飘窗长度计算结果(遮光)
      this.form4.middleWindowLengthResult1 = '' // 腰窗长度计算结果(透光)
      this.form4.longWindowLengthResult1 = '' // 落地窗长度计算结果(透光)
      this.form4.shortWindowLengthResult1 ='' // 飘窗长度计算结果(透光)
    },
    // 保存
    save() {
      // this.$router.go(-1)
      const params = {
        RequestNo: this.requestNo, // 订单编号
        GoodId: this.form3.jan, // 商品id
        GoodNmaeCn: this.form3.cnName , // 商品中文名称
        GoodNameJp: this.form3.jpName, // 商品日文名称
        GoodSpecification: this.form3.size, // 商品规格
        GoodFactory: this.shopFactory, // 厂工
        GoodShadingOrDransparent: this.form1.curtainType == false  ? '透光' : '遮光', // 窗帘类型
        GoodFabric: this.Material, // 面料
        GoodPrice: this.shopPrice, // 商品价格
        OpenType: this.form1.openType ? '单开' : '双开', //  打开方式
        MeasuringWidth: this.measureWidth, // 丈量宽度
        MeasuringHeight: this.measureLength, // 丈量长度
        ActualWidth: this.orderWidth, // 下单宽度
        ActualHeight: this.orderLength, // 下单长度
        InstallationType: this.installMethod ? '正面钩挂' : '天井钩挂', // 安装方法
        IsSplice: this.splicing, // 有无拼接
        Remarks: this.remark , // 追加说明
        Quantity: this.form3.amount, // 数量
        Amount: Number(this.shopPrice) * Number(this.form3.amount), // 小计金额
        Discount: '', // 折扣
        Fieldstate: '',
        StaffNoId: sessionStorage.getItem('staffnoId') || '',
        Id: this.curtainData ? this.curtainData.Id : '',
        CurtainCustomizationType: this.form4.select // 飘窗-落地窗-腰窗
      }
      // 窗帘新增接口
      api.addCurtain(params).then(res => {
        showMsg('保存成功', 'success')
        this.$emit('save:dialog')
      })
    },
    // 撤销
    clickHandle() {
      this.$emit('close:dialog')
    },
    // 打印
    print() {
      // this.$confirm('请于顾客确认后打印此表格', '提示', {
      //   confirmButtonText: '我已确定',
      //   cancelButtonText: '取消',
      //   type: 'warning'
      // }).then(() => {
      //   console.log('答应成功')
      //   this.$message({
      //     type: 'success',
      //     message: '正在打印请稍后'
      //   });
        // 要打印的html
      let printHtml = {
        StaffNo: sessionStorage.getItem('staffID') || '', // 员工工号
        Id: this.curtainData.Id, //
        GoodShadingOrDransparent: this.curtainData.GoodShadingOrDransparent || '透光'  // 窗帘类型 false : 透光 true 遮光
      }
      if (window.parent.addTab) {
        window.parent.addTab('chuanglian_print', 'UserModule/Chuanglian/index.html#/print', '打印')
      } else {
        this.$router.push({name: 'Print'})
      }
      sessionStorage.setItem('print', JSON.stringify(printHtml))
      // }).catch(() => {
      //   console.log('取消打印')
      // });
    },
    // print1 () {
    //   // 保存下面 button 按钮
    //   let oldHtml = document.getElementsByClassName('el-dialog__footer')[0].innerHTML
    //   // 打印前移除 button
    //   document.getElementsByClassName('el-dialog__footer')[0].innerHTML = ''
    //   // 打印
    //   window.print()
    //   // 打印结束后添加按钮到 html
    //   document.getElementsByClassName('el-dialog__footer')[0].innerHTML = oldHtml
    // }
  },

}
</script>

<style scoped lang="less">
.el-radio {
  width: 4rem;
  text-align: center;
  line-height: 150px;
  height: 33%;
  /deep/ .el-radio__label {
    opacity: 0;
    font-size: 0px;
  }
  /deep/ .el-radio__inner {
    width: 18px;
    height: 18px;
  }
  /deep/ .el-radio__input {
    padding-left: 10px;
  }
}
.input-br-none {
  /deep/ input {
    border: none;
  }
}
.el-row {
  margin-left: 0px !important;
  margin-right: 0px !important;
  &:last-child {
    margin-bottom: 0;
  }
}
/deep/ .el-textarea__inner {
  position: absolute;
  top: -40px;
}
/deep/ .el-form-item__content {
  text-align: left;
}
.bottom {
  position: fixed;
  bottom: 10%;
  width : 100%;
}
.el-form-item {
  text-align: left;
}
.label-title {
  font-weight: bold;
  text-align: left;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.curtain-table {
  display: flex;
  padding-bottom: 30px;
  max-height: 480px;
  .left {
    width: 27rem;
    border: 2px solid #000;
    display: flex;
    .left_first {
      height: 29.6rem;
      line-height:29.6rem;
      width: 3rem;
      border-right: 2px solid #000;
      text-align: center;
      background: url('../../static/images/bg1.png');
      color: #000;
      font-size: 1.2rem;
      font-weight: bold;
    }
    .left_second {
      width: 100%;
      .left_seond_item {
        height: 33%;
        display: flex;
        border-top: 2px solid #000;
        width: 380px\9\0;
      }
      .left_seond_item:first-child {
        border-top: 0px solid #000;
      }

      .item_middle {
        flex: 1;
        text-align: center;
        padding: 0rem .2rem;
      }
      .item_right {
        width: 4rem;
        border-left: 2px solid #000;
      }
      .item_right_input {
        /deep/ .el-input__inner {
          height: 155px;
          padding-top: 115px;
          border: none;
        }
        /deep/ .el-input__suffix {
          margin-top: 115px;
        }
      }
    }
  }
  .middle, .right {
    display: flex;
    border: 2px solid #000;
    width: 18rem;
    height: 8rem;
    margin-top: 10.5rem;
    .middle_left {
      border-right: 2px solid #000;
    }
    .middle_right {
      // display: flex;
      width: 20rem;
      .middle_right_item1 {
        height: 50%;
        display: flex;
        width: 254px\9\0;
        border-top: 2px solid #000;
        line-height: 70px;
        .item1_left {
          border-right: 2px solid #000;
          width: 3rem;
          text-align: center;
        }
      }
      .middle_right_item1:first-child {
        border-top: 0px
      }
    }

  }
  .right {
    width: 6rem;
    .middle_right {
      width: 10rem;
      .middle_right_item1 {
        height: 50%;
        display: flex;
        width: 98px\9\0;
      }
    }
    .el-input {
      width: 95px\9\0;
    }
  }
  .item_left {
    width: 2rem;
    min-width: 2rem;
    border-right: 2px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('../../static/images/bg2.png');
    font-weight: bold;
    font-size: 1rem;
    color: #000;
  }
  .length-left {
    width: 18rem;
    .left_second {
      .left_seond_item {
        width: 290px\9\0;
      }
    }
  }
  .length-right {
    width: 6.2rem;
    .left_second {
      .left_seond_item {
        width: 100px\9\0;
        .item_right_input_small {
          /deep/ .el-input__inner {
            height: 105px;
            padding-top: 65px;
            border: none;
          }
          /deep/ .el-input__suffix {
            margin-top: 65px;
          }
        }
        .item_right {
          padding-top: 0;
          border-left: 0px solid #000;
          width: 6.1rem;
          .item-right_title{
            height: 3rem;
            line-height: 3rem;
            text-align: center;
            // margin-bottom: 4rem;
            border-bottom: 2px solid #000;
            background: url('../../static/images/bg2.png');
            font-weight: bold;
            font-size: 1rem;
            color: #000;
          }
        }
      }
    }
  }
  .rocket-group {
    padding-left: 1rem;
    .item {
      background: url('../../static/images/3333.png') no-repeat;
      width: 5.7rem;
      background-size: contain;
      background-size: contain;
      height: 158px;
      position: relative;
      top: 43px
    }
  }
  .left_item_middle {
    display: flex;
    align-items: flex-end;
    .el-input {
      flex: 1;
    }
    div {
      text-align: left;
      width: 7rem;
      color: #000;
      font-weight: bold;
      height: 50px;
      line-height: 21px;
    }
  }
}
.append {
  /deep/ .el-form-item__content {
    width: 100%;
  }
  /deep/ .el-form-item__label {
    width: 60px;
  }
  /deep/ .el-input__inner {
    border-top: none;
    border-left: none;
    border-right: none;
  }
}
.autograph {
  .append {
    /deep/ .el-form-item__label {
      width: 120px;
    }
  }
}
.confirm-table_title {
  border: 2px solid #000;
  text-align: left;
  font-weight: bold;
  font-size: 1.2rem;
  padding: .5rem;
  color: #000;
  margin-bottom: 2rem;
}
.table_body_content {
  border: 2px solid #000;
  height: 8rem;
  display: flex;
  margin-bottom: 2rem;
  .item_left {
    width: 2rem;
    border-right: 2px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('../../static/images/bg2.png');
    font-weight: bold;
    font-size: 1rem;
    color: #000;
    height: 100%;
  }
  .body_content_fabric,
  .table_body_width,
  .table_body_length,
  .table_body_open,
  .teble_body_install,
  .table_body_pinjie {
    .item_left {
      display: block;
      width: 100%;
      height: 2rem;
      line-height: 2rem;
      border-bottom: 2px solid #000;
    }
    .body_top {
      display: flex;
      height: 46px;
      border-bottom: 2px solid #000;
      align-items: center;
      .top_title {
        width: 100%;
      }
    }
  }
  .body_content_fabric {
    flex: 1;
    border-right: 2px solid #000;
  }
  .table_body_width, .table_body_length {
    width: 14rem;
    border-right: 2px solid #000;
    .body_width_top {
      display: flex;
      height: 46px;
      border-bottom: 2px solid #000;
      .top_title {
        flex: 1;
        height: 100%;
        border-right: 2px solid #000;
        line-height: 44px;
      }
      .top_input {
        flex: 1;
        line-height: 50px;
        font-size: 1.2rem;
        /deep/ .el-input__inner {
          border: none;
        }
        /deep/ .el-input__suffix {
          margin-top: 10px;
        }
      }
    }
  }
  .table_body_open {
    width: 7rem;
    border-right: 2px solid #000;

  }
  .teble_body_install, .table_body_pinjie {
    width: 6rem;
    border-right: 2px solid #000;
  }
  .table_body_pinjie {
    border-right: 0px;
  }
}
/deep/ .el-input__suffix {
  color: #000;
  font-size: 1.3rem;
}
/deep/ input::-webkit-outer-spin-button,
/deep/ input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
/deep/ input[type="number"]{
  -moz-appearance: textfield !important;
}
.rocket {
  background: url('../../static/images/rocket1.png') no-repeat ;
  width: 4rem;
  background-position: center;
  background-size: 100%;
}
.double-rocket {
  margin-top: 10.5rem;
  .rocket {
    width: 2rem;
    height: 70px;
    background-size: 66%;
  }
}
.three-rocket {
  // margin-top: 10.5rem;
  .rocket {
    width: 2rem;
    height: 155px;
    background-size: 66%;
    background-position-y: 100%;
  }
}
.autograph {
  display: flex;
  justify-content: space-between;
  padding-right: 100px\9\0;
}
.form6 {
  /deep/ .el-checkbox__inner {
    background-color: #fff !important;
    border-color: #000 !important;
    cursor: default !important;
  }
  /deep/ .el-checkbox__label {
    color: #606266 !important;
    cursor: default !important;
  }
}
.order-sheet-bottom_right {
  div {
    border-bottom: 1px solid #000;
    width: 25rem;
    text-align: left;
    margin-bottom: 2rem;
  }
  input {
    border: none;
    width: 80%;
  }
}
.pt20 {
  padding-top: 2rem;
}
</style>
