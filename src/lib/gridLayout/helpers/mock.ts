export default [
  {
      "x": 0,
      "y": 58,
      "w": 48,
      "h": 20,
      "chartsType": 0,
      "title": "分页表格",
      "renderComponent": "render-page-table",
      "configComponent": [
          {
              "name": "样式配置",
              "component": "style-page-table",
              "icon": "fa-sliders"
          },
          {
              "name": "数据配置",
              "component": "data-page-table",
              "icon": "fa-database"
          }
      ],
      "option": {
          "gridItemStyle": {
              "borderWidth": 0,
              "borderColor": null,
              "borderStyle": "solid",
              "borderRadius": [
                  0,
                  0,
                  0,
                  0
              ],
              "borderImageSource": null,
              "borderImageWidth": 0,
              "borderImageRepeat": "repeat",
              "backgroundColor": "rgba(255, 255, 255, 1)",
              "shadowColor": null,
              "shadowBlur": 0,
              "shadowOffsetX": 0,
              "shadowOffsetY": 0,
              "shadowSpread": 0,
              "backgroundImage": null,
              "backgroundWidthSize": 100,
              "backgroundHeightSize": 100,
              "backgroundRepeat": "no-repeat"
          },
          "tableAttr": {
              "stripe": false,
              "border": true,
              "size": "small",
              "fit": true,
              "showHeader": true,
              "tableHeaderHeight": 0,
              "highlightCurrentRow": false,
              "emptyText": "暂无数据",
              "showSummary": true,
              "sumText": "合计"
          },
          "page": {
              "pageSize": 40,
              "pagerCount": 10,
              "background": false,
              "pageStyle": {
                  "height": 50,
                  "justifyContent": "flex-end",
                  "alignItems": "center",
                  "backgroundColor": "transparent"
              },
              "pageLayout": [
                  "sizes",
                  "total",
                  "prev",
                  "pager",
                  "next",
                  "jumper"
              ]
          },
          "title": {
              "show": true,
              "text": "<h2><strong>项目合同统计</strong></h2>",
              "showDownload": true,
              "downloadLocation": "right",
              "downloadColor": "rgba(0, 0, 0, 1)",
              "downloadBaColor": null,
              "headerStyle": {
                  "height": 50,
                  "backgroundColor": "rgba(217, 215, 215, 1)"
              }
          },
          "tableHeaderCellStyle": {
              "color": null,
              "backgroundColor": null,
              "fontSize": "15px",
              "fontWeight": 400
          },
          "tableHeader": [
              {
                  "isShow": true,
                  "minWidth": null,
                  "fixed": false,
                  "resizable": true,
                  "showOverflowTooltip": true,
                  "align": "center",
                  "unit": "",
                  "prop": "JOB_YWQD_-BH",
                  "label": "编号",
                  "type": "STRING"
              },
              {
                  "isShow": true,
                  "minWidth": null,
                  "fixed": false,
                  "resizable": true,
                  "showOverflowTooltip": true,
                  "align": "center",
                  "unit": "",
                  "prop": "JOB_YWQD_-YWLB",
                  "label": "业务类别",
                  "type": "STRING"
              },
              {
                  "isShow": true,
                  "minWidth": null,
                  "fixed": false,
                  "resizable": true,
                  "showOverflowTooltip": true,
                  "align": "center",
                  "unit": "",
                  "prop": "JOB_YWQD_-DW",
                  "label": "单位",
                  "type": "STRING"
              },
              {
                  "isShow": true,
                  "minWidth": null,
                  "fixed": false,
                  "resizable": true,
                  "showOverflowTooltip": true,
                  "align": "center",
                  "unit": "",
                  "prop": "JOB_YWQD_-ZYY",
                  "label": "作业员",
                  "type": "STRING"
              },
              {
                  "isShow": true,
                  "minWidth": null,
                  "fixed": false,
                  "resizable": true,
                  "showOverflowTooltip": true,
                  "align": "center",
                  "unit": "",
                  "prop": "JOB_YWQD_-HTJE",
                  "label": "合同金额",
                  "type": "NUMBER",
                  "sum": 2700596
              },
              {
                  "isShow": true,
                  "minWidth": null,
                  "fixed": false,
                  "resizable": true,
                  "showOverflowTooltip": true,
                  "align": "center",
                  "unit": "",
                  "prop": "JOB_YWQD_-WJJE",
                  "label": "未结金额",
                  "type": "NUMBER",
                  "sum": 44885428
              },
              {
                  "isShow": true,
                  "minWidth": null,
                  "fixed": false,
                  "resizable": true,
                  "showOverflowTooltip": true,
                  "align": "center",
                  "unit": "",
                  "prop": "JOB_YWQD_-JSJE",
                  "label": "结算金额",
                  "type": "NUMBER",
                  "sum": 1570152
              }
          ],
          "tableData": [
              {
                  "JOB_YWQD_-BH": null,
                  "JOB_YWQD_-YWLB": null,
                  "JOB_YWQD_-DW": null,
                  "JOB_YWQD_-ZYY": null,
                  "JOB_YWQD_-HTJE": null,
                  "JOB_YWQD_-WJJE": null,
                  "JOB_YWQD_-JSJE": null
              },
              {
                  "JOB_YWQD_-BH": "201811280003",
                  "JOB_YWQD_-YWLB": "18",
                  "JOB_YWQD_-DW": "郑州伟盛投资有限公司",
                  "JOB_YWQD_-ZYY": "马鹏飞",
                  "JOB_YWQD_-HTJE": 20000,
                  "JOB_YWQD_-WJJE": 20000,
                  "JOB_YWQD_-JSJE": null
              },
              {
                  "JOB_YWQD_-BH": "201811280004",
                  "JOB_YWQD_-YWLB": null,
                  "JOB_YWQD_-DW": "郑州市金水区土地储备中心",
                  "JOB_YWQD_-ZYY": "马鹏飞",
                  "JOB_YWQD_-HTJE": 15600,
                  "JOB_YWQD_-WJJE": null,
                  "JOB_YWQD_-JSJE": 4000
              },
              {
                  "JOB_YWQD_-BH": "201811290001",
                  "JOB_YWQD_-YWLB": "06",
                  "JOB_YWQD_-DW": "郑州公共住宅建设投资有限公司",
                  "JOB_YWQD_-ZYY": "李武龙",
                  "JOB_YWQD_-HTJE": null,
                  "JOB_YWQD_-WJJE": 15600,
                  "JOB_YWQD_-JSJE": 4000
              },
              {
                  "JOB_YWQD_-BH": "201811300001",
                  "JOB_YWQD_-YWLB": "12",
                  "JOB_YWQD_-DW": "河南太极汇生科技产业园发展有限公司",
                  "JOB_YWQD_-ZYY": "刘力华",
                  "JOB_YWQD_-HTJE": 8000,
                  "JOB_YWQD_-WJJE": null,
                  "JOB_YWQD_-JSJE": null
              },
              {
                  "JOB_YWQD_-BH": "201811300002",
                  "JOB_YWQD_-YWLB": "06",
                  "JOB_YWQD_-DW": "郑州市旧城改造开发公司",
                  "JOB_YWQD_-ZYY": "李武龙",
                  "JOB_YWQD_-HTJE": null,
                  "JOB_YWQD_-WJJE": null,
                  "JOB_YWQD_-JSJE": 2000
              },
              {
                  "JOB_YWQD_-BH": "201811300004",
                  "JOB_YWQD_-YWLB": "23",
                  "JOB_YWQD_-DW": "郑州市土地储备中心二七分中心",
                  "JOB_YWQD_-ZYY": "程慧超",
                  "JOB_YWQD_-HTJE": null,
                  "JOB_YWQD_-WJJE": null,
                  "JOB_YWQD_-JSJE": null
              },
              {
                  "JOB_YWQD_-BH": "201812030001",
                  "JOB_YWQD_-YWLB": "23",
                  "JOB_YWQD_-DW": "惠济区国土资源局",
                  "JOB_YWQD_-ZYY": "李武龙",
                  "JOB_YWQD_-HTJE": 25000,
                  "JOB_YWQD_-WJJE": 4000,
                  "JOB_YWQD_-JSJE": 21000
              },
              {
                  "JOB_YWQD_-BH": "201812030002",
                  "JOB_YWQD_-YWLB": "18",
                  "JOB_YWQD_-DW": "郑州市轨道交通有限公司",
                  "JOB_YWQD_-ZYY": "徐天",
                  "JOB_YWQD_-HTJE": null,
                  "JOB_YWQD_-WJJE": null,
                  "JOB_YWQD_-JSJE": null
              },
              {
                  "JOB_YWQD_-BH": "201812030003",
                  "JOB_YWQD_-YWLB": "28",
                  "JOB_YWQD_-DW": "郑州市土地储备中心二七分中心",
                  "JOB_YWQD_-ZYY": "牛金龙",
                  "JOB_YWQD_-HTJE": 8000,
                  "JOB_YWQD_-WJJE": 8000,
                  "JOB_YWQD_-JSJE": 0
              },
              {
                  "JOB_YWQD_-BH": "201812040001",
                  "JOB_YWQD_-YWLB": "12",
                  "JOB_YWQD_-DW": "郑州鼎发置业有限公司",
                  "JOB_YWQD_-ZYY": "刘力华",
                  "JOB_YWQD_-HTJE": 36000,
                  "JOB_YWQD_-WJJE": 6000,
                  "JOB_YWQD_-JSJE": 30000
              },
              {
                  "JOB_YWQD_-BH": "201812050001",
                  "JOB_YWQD_-YWLB": "30",
                  "JOB_YWQD_-DW": "国有土地（剩余）",
                  "JOB_YWQD_-ZYY": "刘力华",
                  "JOB_YWQD_-HTJE": null,
                  "JOB_YWQD_-WJJE": null,
                  "JOB_YWQD_-JSJE": 2000
              },
              {
                  "JOB_YWQD_-BH": "201812050002",
                  "JOB_YWQD_-YWLB": "23",
                  "JOB_YWQD_-DW": "惠济区国土局",
                  "JOB_YWQD_-ZYY": "乔炳宇",
                  "JOB_YWQD_-HTJE": null,
                  "JOB_YWQD_-WJJE": 2000,
                  "JOB_YWQD_-JSJE": null
              },
              {
                  "JOB_YWQD_-BH": "201812050003",
                  "JOB_YWQD_-YWLB": "20",
                  "JOB_YWQD_-DW": "郑州市高新技术产业开发区管理委员会",
                  "JOB_YWQD_-ZYY": "李武龙",
                  "JOB_YWQD_-HTJE": null,
                  "JOB_YWQD_-WJJE": null,
                  "JOB_YWQD_-JSJE": null
              },
              {
                  "JOB_YWQD_-BH": "201812050004",
                  "JOB_YWQD_-YWLB": "03::04",
                  "JOB_YWQD_-DW": "郑州市高新技术产业开发区管理委员会",
                  "JOB_YWQD_-ZYY": "刘力华",
                  "JOB_YWQD_-HTJE": null,
                  "JOB_YWQD_-WJJE": null,
                  "JOB_YWQD_-JSJE": 7800
              },
              {
                  "JOB_YWQD_-BH": "201812050005",
                  "JOB_YWQD_-YWLB": "20",
                  "JOB_YWQD_-DW": "郑州市金水区土地储备中心",
                  "JOB_YWQD_-ZYY": "马鹏飞",
                  "JOB_YWQD_-HTJE": null,
                  "JOB_YWQD_-WJJE": 2000,
                  "JOB_YWQD_-JSJE": null
              },
              {
                  "JOB_YWQD_-BH": "201812050007",
                  "JOB_YWQD_-YWLB": "02",
                  "JOB_YWQD_-DW": "郑州高新技术产业开发区管理委员会",
                  "JOB_YWQD_-ZYY": "李武龙",
                  "JOB_YWQD_-HTJE": null,
                  "JOB_YWQD_-WJJE": null,
                  "JOB_YWQD_-JSJE": null
              },
              {
                  "JOB_YWQD_-BH": "201812060001",
                  "JOB_YWQD_-YWLB": "20",
                  "JOB_YWQD_-DW": "郑州市管城回族区土地储备中心",
                  "JOB_YWQD_-ZYY": "程慧超",
                  "JOB_YWQD_-HTJE": null,
                  "JOB_YWQD_-WJJE": 2000,
                  "JOB_YWQD_-JSJE": null
              },
              {
                  "JOB_YWQD_-BH": "201812060002",
                  "JOB_YWQD_-YWLB": "23",
                  "JOB_YWQD_-DW": "惠济区国土资源局",
                  "JOB_YWQD_-ZYY": "高帅",
                  "JOB_YWQD_-HTJE": null,
                  "JOB_YWQD_-WJJE": null,
                  "JOB_YWQD_-JSJE": 7800
              },
              {
                  "JOB_YWQD_-BH": "201812060003",
                  "JOB_YWQD_-YWLB": "14",
                  "JOB_YWQD_-DW": "政府收回地（河南中原集装箱运输公司）",
                  "JOB_YWQD_-ZYY": "张长风",
                  "JOB_YWQD_-HTJE": null,
                  "JOB_YWQD_-WJJE": 2000,
                  "JOB_YWQD_-JSJE": null
              },
              {
                  "JOB_YWQD_-BH": "201812060004",
                  "JOB_YWQD_-YWLB": "20",
                  "JOB_YWQD_-DW": "郑州市中原区土地发展中心",
                  "JOB_YWQD_-ZYY": "程慧超",
                  "JOB_YWQD_-HTJE": null,
                  "JOB_YWQD_-WJJE": null,
                  "JOB_YWQD_-JSJE": null
              },
              {
                  "JOB_YWQD_-BH": "201812060005",
                  "JOB_YWQD_-YWLB": "28",
                  "JOB_YWQD_-DW": "郑州经济技术开发区管理委员会",
                  "JOB_YWQD_-ZYY": "乔炳宇",
                  "JOB_YWQD_-HTJE": null,
                  "JOB_YWQD_-WJJE": null,
                  "JOB_YWQD_-JSJE": null
              },
              {
                  "JOB_YWQD_-BH": "201812060006",
                  "JOB_YWQD_-YWLB": "02",
                  "JOB_YWQD_-DW": "郑州市金水区土地准备中心",
                  "JOB_YWQD_-ZYY": "乔炳宇",
                  "JOB_YWQD_-HTJE": 25000,
                  "JOB_YWQD_-WJJE": 1000,
                  "JOB_YWQD_-JSJE": 24000
              },
              {
                  "JOB_YWQD_-BH": "201812070001",
                  "JOB_YWQD_-YWLB": "01",
                  "JOB_YWQD_-DW": "郑州市土地储备中心二七区分钟",
                  "JOB_YWQD_-ZYY": "李旭",
                  "JOB_YWQD_-HTJE": 30000,
                  "JOB_YWQD_-WJJE": 15000,
                  "JOB_YWQD_-JSJE": 15000
              },
              {
                  "JOB_YWQD_-BH": "201812100001",
                  "JOB_YWQD_-YWLB": "26",
                  "JOB_YWQD_-DW": "河南乾德精密技术有限公司",
                  "JOB_YWQD_-ZYY": "乔炳宇",
                  "JOB_YWQD_-HTJE": 42000,
                  "JOB_YWQD_-WJJE": 2000,
                  "JOB_YWQD_-JSJE": 40000
              },
              {
                  "JOB_YWQD_-BH": "201812100002",
                  "JOB_YWQD_-YWLB": "07",
                  "JOB_YWQD_-DW": "郑州经济技术开发区第六中学",
                  "JOB_YWQD_-ZYY": "乔炳宇",
                  "JOB_YWQD_-HTJE": null,
                  "JOB_YWQD_-WJJE": 5600,
                  "JOB_YWQD_-JSJE": 2000
              },
              {
                  "JOB_YWQD_-BH": "201812100003",
                  "JOB_YWQD_-YWLB": "23",
                  "JOB_YWQD_-DW": "郑州市交通轨道公司",
                  "JOB_YWQD_-ZYY": "王贺杰",
                  "JOB_YWQD_-HTJE": 28000,
                  "JOB_YWQD_-WJJE": 8000,
                  "JOB_YWQD_-JSJE": 20000
              },
              {
                  "JOB_YWQD_-BH": "201812100004",
                  "JOB_YWQD_-YWLB": "27",
                  "JOB_YWQD_-DW": "郑州经济技术开发区城市管理局",
                  "JOB_YWQD_-ZYY": "乔炳宇",
                  "JOB_YWQD_-HTJE": 15600,
                  "JOB_YWQD_-WJJE": null,
                  "JOB_YWQD_-JSJE": 4000
              },
              {
                  "JOB_YWQD_-BH": "201812100006",
                  "JOB_YWQD_-YWLB": "30",
                  "JOB_YWQD_-DW": "政府收回地（剩余）",
                  "JOB_YWQD_-ZYY": "王贺杰",
                  "JOB_YWQD_-HTJE": null,
                  "JOB_YWQD_-WJJE": 15600,
                  "JOB_YWQD_-JSJE": null
              },
              {
                  "JOB_YWQD_-BH": "201812110001",
                  "JOB_YWQD_-YWLB": "02",
                  "JOB_YWQD_-DW": "郑州高新技术产业开发区管理委员会",
                  "JOB_YWQD_-ZYY": "李武龙",
                  "JOB_YWQD_-HTJE": 8600,
                  "JOB_YWQD_-WJJE": 2600,
                  "JOB_YWQD_-JSJE": 6000
              },
              {
                  "JOB_YWQD_-BH": "201812110002",
                  "JOB_YWQD_-YWLB": "23",
                  "JOB_YWQD_-DW": "郑州市轨道交通有限公司",
                  "JOB_YWQD_-ZYY": "乔炳宇",
                  "JOB_YWQD_-HTJE": null,
                  "JOB_YWQD_-WJJE": 4000,
                  "JOB_YWQD_-JSJE": null
              },
              {
                  "JOB_YWQD_-BH": "201812110003",
                  "JOB_YWQD_-YWLB": "17",
                  "JOB_YWQD_-DW": "郑州市中原区粮食局大岗刘粮油管理所",
                  "JOB_YWQD_-ZYY": "徐天",
                  "JOB_YWQD_-HTJE": null,
                  "JOB_YWQD_-WJJE": null,
                  "JOB_YWQD_-JSJE": 4000
              },
              {
                  "JOB_YWQD_-BH": "201812110004",
                  "JOB_YWQD_-YWLB": null,
                  "JOB_YWQD_-DW": "中共河南省委第一招待所",
                  "JOB_YWQD_-ZYY": "马鹏飞",
                  "JOB_YWQD_-HTJE": null,
                  "JOB_YWQD_-WJJE": null,
                  "JOB_YWQD_-JSJE": 4000
              },
              {
                  "JOB_YWQD_-BH": "201812110005",
                  "JOB_YWQD_-YWLB": "06",
                  "JOB_YWQD_-DW": "郑州市管城回族区航海东路街道办事处芦邢庄村",
                  "JOB_YWQD_-ZYY": "牛金龙",
                  "JOB_YWQD_-HTJE": 20000,
                  "JOB_YWQD_-WJJE": 4000,
                  "JOB_YWQD_-JSJE": null
              },
              {
                  "JOB_YWQD_-BH": "201812110006",
                  "JOB_YWQD_-YWLB": "23",
                  "JOB_YWQD_-DW": "郑州市管城回族区城乡建设和交通运输局",
                  "JOB_YWQD_-ZYY": "程慧超",
                  "JOB_YWQD_-HTJE": 8900,
                  "JOB_YWQD_-WJJE": 900,
                  "JOB_YWQD_-JSJE": 8000
              },
              {
                  "JOB_YWQD_-BH": "201812110007",
                  "JOB_YWQD_-YWLB": "20",
                  "JOB_YWQD_-DW": "管城储备中心",
                  "JOB_YWQD_-ZYY": "牛金龙",
                  "JOB_YWQD_-HTJE": 16000,
                  "JOB_YWQD_-WJJE": 10000,
                  "JOB_YWQD_-JSJE": 6000
              },
              {
                  "JOB_YWQD_-BH": "201812120001",
                  "JOB_YWQD_-YWLB": "31",
                  "JOB_YWQD_-DW": "河南电力高专（外业）",
                  "JOB_YWQD_-ZYY": "乔炳宇",
                  "JOB_YWQD_-HTJE": null,
                  "JOB_YWQD_-WJJE": null,
                  "JOB_YWQD_-JSJE": null
              },
              {
                  "JOB_YWQD_-BH": "201812120002",
                  "JOB_YWQD_-YWLB": "20",
                  "JOB_YWQD_-DW": "河南建业集团",
                  "JOB_YWQD_-ZYY": "乔炳宇",
                  "JOB_YWQD_-HTJE": 34000,
                  "JOB_YWQD_-WJJE": 4000,
                  "JOB_YWQD_-JSJE": 30000
              },
              {
                  "JOB_YWQD_-BH": "201812120003",
                  "JOB_YWQD_-YWLB": "20",
                  "JOB_YWQD_-DW": "政府收回地（金水区丰庆路街道办事处庙李村）",
                  "JOB_YWQD_-ZYY": "程慧超",
                  "JOB_YWQD_-HTJE": null,
                  "JOB_YWQD_-WJJE": null,
                  "JOB_YWQD_-JSJE": null
              },
              {
                  "JOB_YWQD_-BH": "201812120004",
                  "JOB_YWQD_-YWLB": "23",
                  "JOB_YWQD_-DW": "郑州地铁集团",
                  "JOB_YWQD_-ZYY": "乔炳宇",
                  "JOB_YWQD_-HTJE": 16000,
                  "JOB_YWQD_-WJJE": 10000,
                  "JOB_YWQD_-JSJE": 6000
              }
          ]
      },
      "otherOption": {
          "dataObtainType": 1,
          "conditionSql": "",
          "dataSetId": "067b1447-c242-43ac-9333-10dc63379c56",
          "dimensionList": [
              {
                  "dataSetId": "067b1447-c242-43ac-9333-10dc63379c56",
                  "tableAlias": "JOB_YWQD",
                  "tableName": "JOB_YWQD",
                  "column": "BH",
                  "alias": "编号",
                  "type": "STRING",
                  "delete": false
              },
              {
                  "dataSetId": "067b1447-c242-43ac-9333-10dc63379c56",
                  "tableAlias": "JOB_YWQD",
                  "tableName": "JOB_YWQD",
                  "column": "YWLB",
                  "alias": "业务类别",
                  "type": "STRING",
                  "delete": false
              },
              {
                  "dataSetId": "067b1447-c242-43ac-9333-10dc63379c56",
                  "tableAlias": "JOB_YWQD",
                  "tableName": "JOB_YWQD",
                  "column": "DW",
                  "alias": "单位",
                  "type": "STRING",
                  "delete": false
              },
              {
                  "dataSetId": "067b1447-c242-43ac-9333-10dc63379c56",
                  "tableAlias": "JOB_YWQD",
                  "tableName": "JOB_YWQD",
                  "column": "ZYY",
                  "alias": "作业员",
                  "type": "STRING",
                  "delete": false
              }
          ],
          "measureList": [
              {
                  "dataSetId": "067b1447-c242-43ac-9333-10dc63379c56",
                  "tableAlias": "JOB_YWQD",
                  "tableName": "JOB_YWQD",
                  "column": "HTJE",
                  "alias": "合同金额",
                  "type": "NUMBER",
                  "delete": false,
                  "gatherType": "SUM",
                  "sortType": null
              },
              {
                  "dataSetId": "067b1447-c242-43ac-9333-10dc63379c56",
                  "tableAlias": "JOB_YWQD",
                  "tableName": "JOB_YWQD",
                  "column": "WJJE",
                  "alias": "未结金额",
                  "type": "NUMBER",
                  "delete": false,
                  "gatherType": "SUM",
                  "sortType": null
              },
              {
                  "dataSetId": "067b1447-c242-43ac-9333-10dc63379c56",
                  "tableAlias": "JOB_YWQD",
                  "tableName": "JOB_YWQD",
                  "column": "JSJE",
                  "alias": "结算金额",
                  "type": "NUMBER",
                  "delete": false,
                  "gatherType": "SUM",
                  "sortType": null
              }
          ],
          "whereList": [],
          "selected": false,
          "refresh": 1653878920657,
          "showLoading": false
      },
      "i": 1572862209693,
      "moved": false,
      "initOption": {
          "width": 1397,
          "height": 492
      }
  },
  {
      "x": 0,
      "w": 24,
      "h": 15,
      "chartsType": 0,
      "title": "简单饼图",
      "renderComponent": "render-simple-pie-charts",
      "configComponent": [
          {
              "name": "样式配置",
              "component": "style-simple-pie-charts",
              "icon": "fa-sliders"
          },
          {
              "name": "数据配置",
              "component": "data-simple-pie-charts",
              "icon": "fa-database"
          }
      ],
      "option": {
          "gridItemStyle": {
              "borderWidth": 0,
              "borderColor": null,
              "borderStyle": "solid",
              "borderRadius": [
                  0,
                  0,
                  0,
                  0
              ],
              "borderImageSource": null,
              "borderImageWidth": 0,
              "borderImageRepeat": "repeat",
              "backgroundColor": "rgba(255, 255, 255, 1)",
              "shadowColor": null,
              "shadowBlur": 0,
              "shadowOffsetX": 0,
              "shadowOffsetY": 0,
              "shadowSpread": 0,
              "backgroundImage": null,
              "backgroundWidthSize": 100,
              "backgroundHeightSize": 100,
              "backgroundRepeat": "no-repeat"
          },
          "title": {
              "show": true,
              "left": "center",
              "top": "auto",
              "right": "auto",
              "bottom": "auto",
              "textVerticalAlign": "center",
              "triggerEvent": false,
              "itemGap": 10,
              "backgroundColor": "transparent",
              "padding": [
                  15,
                  5,
                  5,
                  5
              ],
              "borderColor": "#ccc",
              "borderWidth": 0,
              "borderRadius": [
                  0,
                  0,
                  0,
                  0
              ],
              "shadowBlur": 0,
              "shadowColor": "transparent",
              "shadowOffsetX": 0,
              "shadowOffsetY": 0,
              "text": "工作量统计",
              "link": "",
              "target": "blank",
              "textStyle": {
                  "color": "#333",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "fontFamily": "sans-serif",
                  "fontSize": 18,
                  "lineHeight": 20,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              },
              "subtext": "",
              "sublink": "",
              "subtarget": "self",
              "subtextStyle": {
                  "color": "#aaa",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 12,
                  "align": "center",
                  "verticalAlign": "center",
                  "lineHeight": 16,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              }
          },
          "toolbox": {
              "show": false,
              "orient": "horizontal",
              "itemSize": 15,
              "itemGap": 10,
              "showTitle": true,
              "feature": {
                  "dataView": {
                      "show": true,
                      "readOnly": false
                  },
                  "restore": {
                      "show": true
                  },
                  "magicType": {
                      "type": [
                          "line",
                          "bar"
                      ],
                      "show": true
                  },
                  "saveAsImage": {
                      "show": true
                  }
              }
          },
          "legend": {
              "show": true,
              "type": "scroll",
              "zlevel": 0,
              "left": "auto",
              "top": "auto",
              "right": "auto",
              "bottom": "auto",
              "width": "auto",
              "height": "auto",
              "orient": "vertical",
              "align": "auto",
              "padding": [
                  5,
                  5,
                  5,
                  5
              ],
              "itemGap": 10,
              "itemWidth": 25,
              "itemHeight": 14,
              "symbolKeepAspect": true,
              "formatter": "{name}",
              "selectedMode": true,
              "inactiveColor": "#ccc",
              "textStyle": {
                  "backgroundColor": "transparent",
                  "borderColor": "transparent",
                  "borderWidth": 0,
                  "borderRadius": [
                      0,
                      0,
                      0,
                      0
                  ],
                  "padding": [
                      0,
                      0,
                      0,
                      0
                  ],
                  "shadowColor": "transparent",
                  "shadowBlur": 0,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "lineHeight": 30,
                  "color": "#333",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 12,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              },
              "backgroundColor": "transparent",
              "borderColor": "#ccc",
              "borderWidth": 0,
              "borderRadius": [
                  0,
                  0,
                  0,
                  0
              ],
              "shadowBlur": 0,
              "shadowColor": "#ccc",
              "shadowOffsetX": 0,
              "shadowOffsetY": 0
          },
          "tooltip": {
              "show": true,
              "trigger": "item",
              "showContent": true,
              "alwaysShowContent": false,
              "triggerOn": "mousemove|click",
              "showDelay": 0,
              "hideDelay": 100,
              "transitionDuration": 0.4,
              "formatter": "",
              "axisPointer": {
                  "type": "shadow"
              },
              "backgroundColor": "rgba(50,50,50,0.7)",
              "borderColor": "#333",
              "borderWidth": 0,
              "padding": [
                  5,
                  5,
                  5,
                  5
              ],
              "textStyle": {
                  "color": "#fff",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 14,
                  "lineHeight": 25,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              }
          },
          "textStyle": {
              "color": "#000",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontFamily": "sans-serif",
              "fontSize": 12,
              "lineHeight": 30,
              "textBorderColor": "transparent",
              "textBorderWidth": 0,
              "textShadowColor": "transparent",
              "textShadowBlur": 0,
              "textShadowOffsetX": 0,
              "textShadowOffsetY": 0
          },
          "backgroundColor": "transparent",
          "color": [
              "#4b7bec",
              "#45aaf2",
              "#fd9644",
              "#a55eea",
              "#fc5c65",
              "#2bcbba",
              "#26de81",
              "#fd79a8",
              "#f7b731",
              "#778ca3",
              "#b2bec3"
          ],
          "series": [
              {
                  "id": null,
                  "name": "外业工作量",
                  "type": "pie",
                  "legendHoverLink": true,
                  "hoverAnimation": true,
                  "hoverOffset": 10,
                  "selectedMode": false,
                  "selectedOffset": 10,
                  "clockwise": true,
                  "startAngle": 90,
                  "minAngle": 0,
                  "minShowLabelAngle": 0,
                  "roseType": false,
                  "avoidLabelOverlap": true,
                  "stillShowZeroSum": true,
                  "cursor": "pointer",
                  "label": {
                      "show": false,
                      "position": "outside",
                      "distance": 0,
                      "rotate": 0,
                      "offset": [
                          0,
                          0
                      ],
                      "formatter": "{a}{b}{c}",
                      "color": null,
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontFamily": "sans-serif",
                      "fontSize": 12,
                      "align": "center",
                      "verticalAlign": "auto",
                      "lineHeight": 15,
                      "textBorderColor": "transparent",
                      "textBorderWidth": 0,
                      "textShadowColor": "transparent",
                      "textShadowBlur": 0,
                      "textShadowOffsetX": 0,
                      "textShadowOffsetY": 0,
                      "backgroundColor": "transparent",
                      "borderColor": "transparent",
                      "borderWidth": 0,
                      "borderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "padding": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowColor": "transparent",
                      "shadowBlur": 0,
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0
                  },
                  "labelLine": {
                      "show": false,
                      "length": 0,
                      "length2": 0,
                      "smooth": false,
                      "lineStyle": {
                          "color": null,
                          "width": 1,
                          "type": "solid",
                          "shadowBlur": 1,
                          "shadowColor": null,
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0,
                          "opacity": 1
                      },
                      "emphasis": {
                          "show": false,
                          "lineStyle": {
                              "color": null,
                              "width": 1,
                              "type": "solid",
                              "shadowBlur": 1,
                              "shadowColor": null,
                              "shadowOffsetX": 0,
                              "shadowOffsetY": 0,
                              "opacity": 1
                          }
                      }
                  },
                  "itemStyle": {
                      "color": null,
                      "borderColor": "#000",
                      "borderWidth": 0,
                      "borderType": "solid",
                      "barBorderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowBlur": 0,
                      "shadowColor": "#ccc",
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0,
                      "opacity": 1
                  },
                  "emphasis": {
                      "label": {
                          "show": false,
                          "position": "top",
                          "distance": 0,
                          "rotate": 0,
                          "offset": [
                              0,
                              0
                          ],
                          "formatter": "{a}{b}{c}",
                          "color": null,
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                          "fontFamily": "sans-serif",
                          "fontSize": 12,
                          "align": "center",
                          "verticalAlign": "auto",
                          "lineHeight": 15,
                          "textBorderColor": "transparent",
                          "textBorderWidth": 0,
                          "textShadowColor": "transparent",
                          "textShadowBlur": 0,
                          "textShadowOffsetX": 0,
                          "textShadowOffsetY": 0,
                          "backgroundColor": "transparent",
                          "borderColor": "transparent",
                          "borderWidth": 0,
                          "borderRadius": [
                              0,
                              0,
                              0,
                              0
                          ],
                          "padding": [
                              0,
                              0,
                              0,
                              0
                          ],
                          "shadowColor": "transparent",
                          "shadowBlur": 0,
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0
                      },
                      "itemStyle": {
                          "color": null,
                          "borderColor": "#000",
                          "borderWidth": 0,
                          "borderType": "solid",
                          "barBorderRadius": [
                              0,
                              0,
                              0,
                              0
                          ],
                          "shadowBlur": 0,
                          "shadowColor": "#ccc",
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0,
                          "opacity": 1
                      }
                  },
                  "radius": [
                      0,
                      "75%"
                  ],
                  "center": [
                      "50%",
                      "50%"
                  ],
                  "data": [
                      {
                          "name": null,
                          "value": 0
                      },
                      {
                          "name": "王贺杰",
                          "value": 891
                      },
                      {
                          "name": "李丽",
                          "value": 32.8
                      },
                      {
                          "name": "吴绮莉",
                          "value": 8
                      },
                      {
                          "name": "张辉",
                          "value": 58
                      },
                      {
                          "name": "张晨星",
                          "value": 494
                      },
                      {
                          "name": "李明",
                          "value": 14
                      },
                      {
                          "name": "马鹏飞",
                          "value": 1030
                      },
                      {
                          "name": "李武龙",
                          "value": 424
                      },
                      {
                          "name": "徐天",
                          "value": 2666
                      },
                      {
                          "name": "李旭",
                          "value": 135
                      },
                      {
                          "name": "刘力华",
                          "value": 4138
                      },
                      {
                          "name": "王武",
                          "value": 15
                      },
                      {
                          "name": "刘思思",
                          "value": 176
                      },
                      {
                          "name": "张长风",
                          "value": 194
                      },
                      {
                          "name": "吴思强",
                          "value": 33
                      },
                      {
                          "name": "王敏月",
                          "value": 148
                      },
                      {
                          "name": "乔炳宇",
                          "value": 1399
                      },
                      {
                          "name": "牛金龙",
                          "value": 1064
                      },
                      {
                          "name": "宋怡娴",
                          "value": 182
                      },
                      {
                          "name": "高帅",
                          "value": 696
                      },
                      {
                          "name": "程慧超",
                          "value": 3219
                      }
                  ]
              }
          ]
      },
      "otherOption": {
          "dataObtainType": 1,
          "conditionSql": "",
          "dataSetId": "067b1447-c242-43ac-9333-10dc63379c56",
          "dimensionList": [
              {
                  "dataSetId": "067b1447-c242-43ac-9333-10dc63379c56",
                  "tableAlias": "JOB_YWQD",
                  "tableName": "JOB_YWQD",
                  "column": "ZYY",
                  "alias": "作业员",
                  "type": "STRING",
                  "delete": false
              }
          ],
          "measureList": [
              {
                  "dataSetId": "067b1447-c242-43ac-9333-10dc63379c56",
                  "tableAlias": "JOB_YWQD",
                  "tableName": "JOB_YWQD",
                  "column": "WYGZL",
                  "alias": "外业工作量",
                  "type": "NUMBER",
                  "delete": false,
                  "gatherType": "SUM",
                  "sortType": null
              }
          ],
          "whereList": [],
          "selected": false,
          "refresh": 1653878920657,
          "showLoading": false
      },
      "y": 78,
      "i": 1572862631993,
      "moved": false,
      "initOption": {
          "width": 695,
          "height": 367
      }
  },
  {
      "x": 24,
      "w": 24,
      "h": 15,
      "chartsType": 0,
      "title": "简单饼图",
      "renderComponent": "render-simple-pie-charts",
      "configComponent": [
          {
              "name": "样式配置",
              "component": "style-simple-pie-charts",
              "icon": "fa-sliders"
          },
          {
              "name": "数据配置",
              "component": "data-simple-pie-charts",
              "icon": "fa-database"
          }
      ],
      "option": {
          "gridItemStyle": {
              "borderWidth": 0,
              "borderColor": null,
              "borderStyle": "solid",
              "borderRadius": [
                  0,
                  0,
                  0,
                  0
              ],
              "borderImageSource": null,
              "borderImageWidth": 0,
              "borderImageRepeat": "repeat",
              "backgroundColor": "rgba(255, 255, 255, 1)",
              "shadowColor": null,
              "shadowBlur": 0,
              "shadowOffsetX": 0,
              "shadowOffsetY": 0,
              "shadowSpread": 0,
              "backgroundImage": null,
              "backgroundWidthSize": 100,
              "backgroundHeightSize": 100,
              "backgroundRepeat": "no-repeat"
          },
          "title": {
              "show": true,
              "left": "center",
              "top": "auto",
              "right": "auto",
              "bottom": "auto",
              "textVerticalAlign": "center",
              "triggerEvent": false,
              "itemGap": 10,
              "backgroundColor": "transparent",
              "padding": [
                  15,
                  5,
                  5,
                  5
              ],
              "borderColor": "#ccc",
              "borderWidth": 0,
              "borderRadius": [
                  0,
                  0,
                  0,
                  0
              ],
              "shadowBlur": 0,
              "shadowColor": "transparent",
              "shadowOffsetX": 0,
              "shadowOffsetY": 0,
              "text": "外业里程统计",
              "link": "",
              "target": "blank",
              "textStyle": {
                  "color": "#333",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "fontFamily": "sans-serif",
                  "fontSize": 18,
                  "lineHeight": 20,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              },
              "subtext": "",
              "sublink": "",
              "subtarget": "self",
              "subtextStyle": {
                  "color": "#aaa",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 12,
                  "align": "center",
                  "verticalAlign": "center",
                  "lineHeight": 16,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              }
          },
          "toolbox": {
              "show": false,
              "orient": "horizontal",
              "itemSize": 15,
              "itemGap": 10,
              "showTitle": true,
              "feature": {
                  "dataView": {
                      "show": true,
                      "readOnly": false
                  },
                  "restore": {
                      "show": true
                  },
                  "magicType": {
                      "type": [
                          "line",
                          "bar"
                      ],
                      "show": true
                  },
                  "saveAsImage": {
                      "show": true
                  }
              }
          },
          "legend": {
              "show": true,
              "type": "scroll",
              "zlevel": 0,
              "left": "auto",
              "top": "auto",
              "right": "auto",
              "bottom": "auto",
              "width": "auto",
              "height": "auto",
              "orient": "vertical",
              "align": "auto",
              "padding": [
                  5,
                  5,
                  5,
                  5
              ],
              "itemGap": 10,
              "itemWidth": 25,
              "itemHeight": 14,
              "symbolKeepAspect": true,
              "formatter": "{name}",
              "selectedMode": true,
              "inactiveColor": "#ccc",
              "textStyle": {
                  "backgroundColor": "transparent",
                  "borderColor": "transparent",
                  "borderWidth": 0,
                  "borderRadius": [
                      0,
                      0,
                      0,
                      0
                  ],
                  "padding": [
                      0,
                      0,
                      0,
                      0
                  ],
                  "shadowColor": "transparent",
                  "shadowBlur": 0,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "lineHeight": 30,
                  "color": "#333",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 12,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              },
              "backgroundColor": "transparent",
              "borderColor": "#ccc",
              "borderWidth": 0,
              "borderRadius": [
                  0,
                  0,
                  0,
                  0
              ],
              "shadowBlur": 0,
              "shadowColor": "#ccc",
              "shadowOffsetX": 0,
              "shadowOffsetY": 0
          },
          "tooltip": {
              "show": true,
              "trigger": "item",
              "showContent": true,
              "alwaysShowContent": false,
              "triggerOn": "mousemove|click",
              "showDelay": 0,
              "hideDelay": 100,
              "transitionDuration": 0.4,
              "formatter": "",
              "axisPointer": {
                  "type": "shadow"
              },
              "backgroundColor": "rgba(50,50,50,0.7)",
              "borderColor": "#333",
              "borderWidth": 0,
              "padding": [
                  5,
                  5,
                  5,
                  5
              ],
              "textStyle": {
                  "color": "#fff",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 14,
                  "lineHeight": 25,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              }
          },
          "textStyle": {
              "color": "#000",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontFamily": "sans-serif",
              "fontSize": 12,
              "lineHeight": 30,
              "textBorderColor": "transparent",
              "textBorderWidth": 0,
              "textShadowColor": "transparent",
              "textShadowBlur": 0,
              "textShadowOffsetX": 0,
              "textShadowOffsetY": 0
          },
          "backgroundColor": "transparent",
          "color": [
              "#4b7bec",
              "#45aaf2",
              "#fd9644",
              "#a55eea",
              "#fc5c65",
              "#2bcbba",
              "#26de81",
              "#fd79a8",
              "#f7b731",
              "#778ca3",
              "#b2bec3"
          ],
          "series": [
              {
                  "id": null,
                  "name": "折扣",
                  "type": "pie",
                  "legendHoverLink": true,
                  "hoverAnimation": true,
                  "hoverOffset": 10,
                  "selectedMode": false,
                  "selectedOffset": 10,
                  "clockwise": true,
                  "startAngle": 90,
                  "minAngle": 0,
                  "minShowLabelAngle": 0,
                  "roseType": true,
                  "avoidLabelOverlap": true,
                  "stillShowZeroSum": true,
                  "cursor": "pointer",
                  "label": {
                      "show": false,
                      "position": "outside",
                      "distance": 0,
                      "rotate": 0,
                      "offset": [
                          0,
                          0
                      ],
                      "formatter": "{a}{b}{c}",
                      "color": null,
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontFamily": "sans-serif",
                      "fontSize": 12,
                      "align": "center",
                      "verticalAlign": "auto",
                      "lineHeight": 15,
                      "textBorderColor": "transparent",
                      "textBorderWidth": 0,
                      "textShadowColor": "transparent",
                      "textShadowBlur": 0,
                      "textShadowOffsetX": 0,
                      "textShadowOffsetY": 0,
                      "backgroundColor": "transparent",
                      "borderColor": "transparent",
                      "borderWidth": 0,
                      "borderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "padding": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowColor": "transparent",
                      "shadowBlur": 0,
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0
                  },
                  "labelLine": {
                      "show": false,
                      "length": 0,
                      "length2": 0,
                      "smooth": false,
                      "lineStyle": {
                          "color": null,
                          "width": 1,
                          "type": "solid",
                          "shadowBlur": 1,
                          "shadowColor": null,
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0,
                          "opacity": 1
                      },
                      "emphasis": {
                          "show": false,
                          "lineStyle": {
                              "color": null,
                              "width": 1,
                              "type": "solid",
                              "shadowBlur": 1,
                              "shadowColor": null,
                              "shadowOffsetX": 0,
                              "shadowOffsetY": 0,
                              "opacity": 1
                          }
                      }
                  },
                  "itemStyle": {
                      "color": null,
                      "borderColor": "#000",
                      "borderWidth": 0,
                      "borderType": "solid",
                      "barBorderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowBlur": 0,
                      "shadowColor": "#ccc",
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0,
                      "opacity": 1
                  },
                  "emphasis": {
                      "label": {
                          "show": false,
                          "position": "top",
                          "distance": 0,
                          "rotate": 0,
                          "offset": [
                              0,
                              0
                          ],
                          "formatter": "{a}{b}{c}",
                          "color": null,
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                          "fontFamily": "sans-serif",
                          "fontSize": 12,
                          "align": "center",
                          "verticalAlign": "auto",
                          "lineHeight": 15,
                          "textBorderColor": "transparent",
                          "textBorderWidth": 0,
                          "textShadowColor": "transparent",
                          "textShadowBlur": 0,
                          "textShadowOffsetX": 0,
                          "textShadowOffsetY": 0,
                          "backgroundColor": "transparent",
                          "borderColor": "transparent",
                          "borderWidth": 0,
                          "borderRadius": [
                              0,
                              0,
                              0,
                              0
                          ],
                          "padding": [
                              0,
                              0,
                              0,
                              0
                          ],
                          "shadowColor": "transparent",
                          "shadowBlur": 0,
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0
                      },
                      "itemStyle": {
                          "color": null,
                          "borderColor": "#000",
                          "borderWidth": 0,
                          "borderType": "solid",
                          "barBorderRadius": [
                              0,
                              0,
                              0,
                              0
                          ],
                          "shadowBlur": 0,
                          "shadowColor": "#ccc",
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0,
                          "opacity": 1
                      }
                  },
                  "radius": [
                      0,
                      "75%"
                  ],
                  "center": [
                      "50%",
                      "50%"
                  ],
                  "data": [
                      {
                          "name": "秦皇岛",
                          "value": 0.3
                      },
                      {
                          "name": "上海",
                          "value": 0.5
                      },
                      {
                          "name": "济南",
                          "value": 0.8
                      },
                      {
                          "name": "长春",
                          "value": 0.1
                      },
                      {
                          "name": "青岛",
                          "value": 0.35
                      },
                      {
                          "name": "烟台",
                          "value": 1.35
                      },
                      {
                          "name": "长治",
                          "value": 0
                      },
                      {
                          "name": "武汉",
                          "value": 0.3
                      },
                      {
                          "name": "北京",
                          "value": 1.8
                      },
                      {
                          "name": "南京",
                          "value": 0.1
                      }
                  ]
              }
          ]
      },
      "otherOption": {
          "dataObtainType": 1,
          "conditionSql": "",
          "dataSetId": "054694b2-cb76-4fb2-9d2c-d515c389736e",
          "dimensionList": [
              {
                  "dataSetId": "054694b2-cb76-4fb2-9d2c-d515c389736e",
                  "tableAlias": "订单",
                  "tableName": "CHART_TESTDATA",
                  "column": "CITY",
                  "alias": "城市",
                  "type": "STRING",
                  "delete": false
              }
          ],
          "measureList": [
              {
                  "dataSetId": "054694b2-cb76-4fb2-9d2c-d515c389736e",
                  "tableAlias": "订单",
                  "tableName": "CHART_TESTDATA",
                  "column": "DISCOUNT",
                  "alias": "折扣",
                  "type": "NUMBER",
                  "delete": false,
                  "gatherType": "SUM",
                  "sortType": null
              }
          ],
          "whereList": [],
          "selected": false,
          "refresh": 1653878920657,
          "showLoading": false
      },
      "y": 78,
      "i": 1572863429598,
      "moved": false,
      "initOption": {
          "width": 695,
          "height": 367
      }
  },
  {
      "x": 0,
      "w": 48,
      "h": 15,
      "chartsType": 0,
      "title": "多Y轴柱形图",
      "renderComponent": "render-multiple-yAxis-bar-charts",
      "configComponent": [
          {
              "name": "样式配置",
              "component": "style-multiple-yAxis-bar-charts",
              "icon": "fa-sliders"
          },
          {
              "name": "数据配置",
              "component": "data-multiple-yAxis-bar-charts",
              "icon": "fa-database"
          }
      ],
      "option": {
          "gridItemStyle": {
              "borderWidth": 0,
              "borderColor": null,
              "borderStyle": "solid",
              "borderRadius": [
                  0,
                  0,
                  0,
                  0
              ],
              "borderImageSource": null,
              "borderImageWidth": 0,
              "borderImageRepeat": "repeat",
              "backgroundColor": null,
              "shadowColor": null,
              "shadowBlur": 0,
              "shadowOffsetX": 0,
              "shadowOffsetY": 0,
              "shadowSpread": 0,
              "backgroundImage": null,
              "backgroundWidthSize": 100,
              "backgroundHeightSize": 100,
              "backgroundRepeat": "no-repeat"
          },
          "title": {
              "show": true,
              "left": "center",
              "top": "auto",
              "right": "auto",
              "bottom": "auto",
              "textVerticalAlign": "center",
              "triggerEvent": false,
              "itemGap": 10,
              "backgroundColor": "transparent",
              "padding": [
                  18,
                  5,
                  5,
                  5
              ],
              "borderColor": "#ccc",
              "borderWidth": 0,
              "borderRadius": [
                  0,
                  0,
                  0,
                  0
              ],
              "shadowBlur": 0,
              "shadowColor": "transparent",
              "shadowOffsetX": 0,
              "shadowOffsetY": 0,
              "text": "作业员工作量统计",
              "link": "",
              "target": "blank",
              "textStyle": {
                  "color": "#333",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "fontFamily": "sans-serif",
                  "fontSize": 20,
                  "lineHeight": 20,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              },
              "subtext": "",
              "sublink": "",
              "subtarget": "self",
              "subtextStyle": {
                  "color": "#aaa",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 12,
                  "align": "center",
                  "verticalAlign": "center",
                  "lineHeight": 16,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              }
          },
          "toolbox": {
              "show": false,
              "orient": "horizontal",
              "itemSize": 15,
              "itemGap": 10,
              "showTitle": true,
              "feature": {
                  "dataView": {
                      "show": true,
                      "readOnly": false
                  },
                  "restore": {
                      "show": true
                  },
                  "magicType": {
                      "type": [
                          "line",
                          "bar"
                      ],
                      "show": true
                  },
                  "saveAsImage": {
                      "show": true
                  }
              }
          },
          "legend": {
              "show": true,
              "type": "scroll",
              "zlevel": 0,
              "left": "auto",
              "top": "auto",
              "right": "auto",
              "bottom": "auto",
              "width": "auto",
              "height": "auto",
              "orient": "horizontal",
              "align": "auto",
              "padding": [
                  5,
                  5,
                  5,
                  5
              ],
              "itemGap": 10,
              "itemWidth": 25,
              "itemHeight": 14,
              "symbolKeepAspect": true,
              "formatter": "{name}",
              "selectedMode": true,
              "inactiveColor": "#ccc",
              "textStyle": {
                  "backgroundColor": "transparent",
                  "borderColor": "transparent",
                  "borderWidth": 0,
                  "borderRadius": [
                      0,
                      0,
                      0,
                      0
                  ],
                  "padding": [
                      0,
                      0,
                      0,
                      0
                  ],
                  "shadowColor": "transparent",
                  "shadowBlur": 0,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "lineHeight": 30,
                  "color": "#333",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 12,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              },
              "backgroundColor": "transparent",
              "borderColor": "#ccc",
              "borderWidth": 0,
              "borderRadius": [
                  0,
                  0,
                  0,
                  0
              ],
              "shadowBlur": 0,
              "shadowColor": "#ccc",
              "shadowOffsetX": 0,
              "shadowOffsetY": 0
          },
          "tooltip": {
              "show": true,
              "trigger": "axis",
              "showContent": true,
              "alwaysShowContent": false,
              "triggerOn": "mousemove|click",
              "showDelay": 0,
              "hideDelay": 100,
              "transitionDuration": 0.4,
              "formatter": "",
              "axisPointer": {
                  "type": "shadow"
              },
              "backgroundColor": "rgba(50,50,50,0.7)",
              "borderColor": "#333",
              "borderWidth": 0,
              "padding": [
                  5,
                  5,
                  5,
                  5
              ],
              "textStyle": {
                  "color": "#fff",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 14,
                  "lineHeight": 25,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              }
          },
          "textStyle": {
              "color": "#000",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontFamily": "sans-serif",
              "fontSize": 12,
              "lineHeight": 30,
              "textBorderColor": "transparent",
              "textBorderWidth": 0,
              "textShadowColor": "transparent",
              "textShadowBlur": 0,
              "textShadowOffsetX": 0,
              "textShadowOffsetY": 0
          },
          "backgroundColor": "transparent",
          "color": [
              "#4b7bec",
              "#45aaf2",
              "#fd9644",
              "#a55eea",
              "#fc5c65",
              "#2bcbba",
              "#26de81",
              "#fd79a8",
              "#f7b731",
              "#778ca3",
              "#b2bec3"
          ],
          "grid": {
              "left": "3%",
              "right": "4%",
              "bottom": "3%",
              "containLabel": true
          },
          "xAxis": [
              {
                  "show": true,
                  "id": null,
                  "position": "bottom",
                  "offset": 0,
                  "type": "category",
                  "name": "作业员",
                  "nameLocation": "end",
                  "nameTextStyle": {
                      "color": null,
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontFamily": "sans-serif",
                      "fontSize": 12,
                      "align": "auto",
                      "verticalAlign": "auto",
                      "lineHeight": 56,
                      "textBorderColor": "transparent",
                      "textBorderWidth": 0,
                      "textShadowColor": "transparent",
                      "textShadowBlur": 0,
                      "textShadowOffsetX": 0,
                      "textShadowOffsetY": 0,
                      "backgroundColor": "transparent",
                      "borderColor": "transparent",
                      "borderWidth": 0,
                      "borderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "padding": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowColor": "transparent",
                      "shadowBlur": 0,
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0
                  },
                  "boundaryGap": true,
                  "nameGap": 0,
                  "data": [
                      null,
                      "王贺杰",
                      "李丽",
                      "吴绮莉",
                      "张辉",
                      "张晨星",
                      "李明",
                      "马鹏飞",
                      "李武龙",
                      "徐天",
                      "李旭",
                      "刘力华",
                      "王武",
                      "刘思思",
                      "张长风",
                      "吴思强",
                      "王敏月",
                      "乔炳宇",
                      "牛金龙",
                      "宋怡娴",
                      "高帅",
                      "程慧超"
                  ],
                  "nameRotate": 0,
                  "inverse": false,
                  "axisLabel": {
                      "show": true,
                      "inside": false,
                      "rotate": 0,
                      "margin": 8,
                      "color": null,
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontFamily": "sans-serif",
                      "fontSize": 12,
                      "align": "auto",
                      "verticalAlign": "auto",
                      "lineHeight": 56,
                      "textBorderColor": "transparent",
                      "textBorderWidth": 0,
                      "textShadowColor": "transparent",
                      "textShadowBlur": 0,
                      "textShadowOffsetX": 0,
                      "textShadowOffsetY": 0,
                      "backgroundColor": "transparent",
                      "borderColor": "transparent",
                      "borderWidth": 0,
                      "borderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "padding": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowColor": "transparent",
                      "shadowBlur": 0,
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0
                  },
                  "axisLine": {
                      "show": true,
                      "onZero": true,
                      "symbol": [
                          "none",
                          "none"
                      ],
                      "symbolSize": [
                          10,
                          15
                      ],
                      "symbolOffset": [
                          0,
                          0
                      ],
                      "lineStyle": {
                          "color": "#333",
                          "width": 1,
                          "type": "solid",
                          "shadowBlur": 0,
                          "shadowColor": "#ccc",
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0,
                          "opacity": 1
                      }
                  },
                  "axisTick": {
                      "show": true,
                      "inside": false,
                      "length": 5,
                      "lineStyle": {
                          "color": "#333",
                          "width": 1,
                          "type": "solid",
                          "shadowBlur": 0,
                          "shadowColor": "#ccc",
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0,
                          "opacity": 1
                      }
                  }
              }
          ],
          "yAxis": [
              {
                  "id": "JOB_YWQD_-WYGZL",
                  "show": true,
                  "position": "left",
                  "offset": 0,
                  "type": "value",
                  "name": "外业工作量",
                  "nameLocation": "end",
                  "boundaryGap": true,
                  "nameTextStyle": {
                      "color": "#4b7bec",
                      "fontStyle": "normal",
                      "fontWeight": "bold",
                      "fontFamily": "sans-serif",
                      "fontSize": 12,
                      "align": "auto",
                      "verticalAlign": "auto",
                      "lineHeight": 56,
                      "textBorderColor": "transparent",
                      "textBorderWidth": 0,
                      "textShadowColor": "transparent",
                      "textShadowBlur": 0,
                      "textShadowOffsetX": 0,
                      "textShadowOffsetY": 0,
                      "backgroundColor": "transparent",
                      "borderColor": "transparent",
                      "borderWidth": 0,
                      "borderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "padding": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowColor": "transparent",
                      "shadowBlur": 0,
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0
                  },
                  "nameGap": 15,
                  "axisLabel": {
                      "show": true,
                      "formatter": "{value} ",
                      "interval": 1,
                      "inside": false,
                      "rotate": 0,
                      "margin": 5,
                      "color": "#4b7bec",
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontFamily": "sans-serif",
                      "fontSize": 12,
                      "align": "right",
                      "verticalAlign": "middle",
                      "lineHeight": 56,
                      "textBorderColor": "transparent",
                      "textBorderWidth": 0,
                      "textShadowColor": "transparent",
                      "textShadowBlur": 0,
                      "textShadowOffsetX": 0,
                      "textShadowOffsetY": 0,
                      "backgroundColor": "transparent",
                      "borderColor": "transparent",
                      "borderWidth": 0,
                      "borderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "padding": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowColor": "transparent",
                      "shadowBlur": 0,
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0
                  },
                  "axisLine": {
                      "show": false,
                      "onZero": true,
                      "symbol": [
                          "none",
                          "none"
                      ],
                      "symbolSize": [
                          10,
                          15
                      ],
                      "symbolOffset": [
                          0,
                          0
                      ],
                      "lineStyle": {
                          "color": "#4b7bec",
                          "width": 1,
                          "type": "solid",
                          "shadowBlur": 0,
                          "shadowColor": "#ccc",
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0,
                          "opacity": 1
                      }
                  },
                  "axisTick": {
                      "show": false,
                      "inside": false,
                      "length": 5,
                      "lineStyle": {
                          "color": "#4b7bec",
                          "width": 1,
                          "type": "solid",
                          "shadowBlur": 0,
                          "shadowColor": "#ccc",
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0,
                          "opacity": 1
                      }
                  }
              },
              {
                  "id": "JOB_YWQD_-WYGZL2",
                  "show": true,
                  "position": "right",
                  "offset": 0,
                  "type": "value",
                  "name": "外业工作量里程",
                  "nameLocation": "end",
                  "boundaryGap": true,
                  "nameTextStyle": {
                      "color": "#45aaf2",
                      "fontStyle": "normal",
                      "fontWeight": "bold",
                      "fontFamily": "sans-serif",
                      "fontSize": 12,
                      "align": "auto",
                      "verticalAlign": "auto",
                      "lineHeight": 56,
                      "textBorderColor": "transparent",
                      "textBorderWidth": 0,
                      "textShadowColor": "transparent",
                      "textShadowBlur": 0,
                      "textShadowOffsetX": 0,
                      "textShadowOffsetY": 0,
                      "backgroundColor": "transparent",
                      "borderColor": "transparent",
                      "borderWidth": 0,
                      "borderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "padding": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowColor": "transparent",
                      "shadowBlur": 0,
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0
                  },
                  "nameGap": 15,
                  "axisLabel": {
                      "show": true,
                      "formatter": "{value} ",
                      "interval": 1,
                      "inside": false,
                      "rotate": 0,
                      "margin": 32,
                      "color": "#45aaf2",
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontFamily": "sans-serif",
                      "fontSize": 12,
                      "align": "right",
                      "verticalAlign": "middle",
                      "lineHeight": 56,
                      "textBorderColor": "transparent",
                      "textBorderWidth": 0,
                      "textShadowColor": "transparent",
                      "textShadowBlur": 0,
                      "textShadowOffsetX": 0,
                      "textShadowOffsetY": 13,
                      "backgroundColor": "transparent",
                      "borderColor": "transparent",
                      "borderWidth": 0,
                      "borderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "padding": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowColor": "transparent",
                      "shadowBlur": 0,
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0
                  },
                  "axisLine": {
                      "show": false,
                      "onZero": true,
                      "symbol": [
                          "none",
                          "none"
                      ],
                      "symbolSize": [
                          10,
                          15
                      ],
                      "symbolOffset": [
                          0,
                          0
                      ],
                      "lineStyle": {
                          "color": "#45aaf2",
                          "width": 1,
                          "type": "solid",
                          "shadowBlur": 0,
                          "shadowColor": "#ccc",
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0,
                          "opacity": 1
                      }
                  },
                  "axisTick": {
                      "show": false,
                      "inside": false,
                      "length": 5,
                      "lineStyle": {
                          "color": "#45aaf2",
                          "width": 1,
                          "type": "solid",
                          "shadowBlur": 0,
                          "shadowColor": "#ccc",
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0,
                          "opacity": 1
                      }
                  }
              }
          ],
          "series": [
              {
                  "type": "line",
                  "id": "JOB_YWQD_-WYGZL",
                  "name": "外业工作量",
                  "coordinateSystem": "cartesian2d",
                  "xAxisIndex": 0,
                  "yAxisIndex": 0,
                  "polarIndex": 0,
                  "hoverAnimation": true,
                  "legendHoverLink": true,
                  "cursor": "pointer",
                  "connectNulls": false,
                  "clipOverflow": true,
                  "step": false,
                  "label": {
                      "show": false,
                      "position": "top",
                      "distance": 0,
                      "rotate": 0,
                      "offset": [
                          0,
                          0
                      ],
                      "formatter": "{a}{b}{c}",
                      "color": null,
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontFamily": "sans-serif",
                      "fontSize": 12,
                      "align": "center",
                      "verticalAlign": "auto",
                      "lineHeight": 15,
                      "textBorderColor": "transparent",
                      "textBorderWidth": 0,
                      "textShadowColor": "transparent",
                      "textShadowBlur": 0,
                      "textShadowOffsetX": 0,
                      "textShadowOffsetY": 0,
                      "backgroundColor": "transparent",
                      "borderColor": "transparent",
                      "borderWidth": 0,
                      "borderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "padding": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowColor": "transparent",
                      "shadowBlur": 0,
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0
                  },
                  "itemStyle": {
                      "color": null,
                      "borderColor": "#000",
                      "borderWidth": 0,
                      "borderType": "solid",
                      "barBorderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowBlur": 0,
                      "shadowColor": "#ccc",
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0,
                      "opacity": 1
                  },
                  "lineStyle": {
                      "color": null,
                      "width": 1,
                      "type": "solid",
                      "shadowBlur": 1,
                      "shadowColor": null,
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0,
                      "opacity": 1
                  },
                  "areaStyle": {
                      "color": null,
                      "origin": "auto",
                      "shadowBlur": 0,
                      "shadowColor": null,
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0,
                      "opacity": 0
                  },
                  "emphasis": {
                      "label": {
                          "show": false,
                          "position": "top",
                          "distance": 0,
                          "rotate": 0,
                          "offset": [
                              0,
                              0
                          ],
                          "formatter": "{a}{b}{c}",
                          "color": null,
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                          "fontFamily": "sans-serif",
                          "fontSize": 12,
                          "align": "center",
                          "verticalAlign": "auto",
                          "lineHeight": 15,
                          "textBorderColor": "transparent",
                          "textBorderWidth": 0,
                          "textShadowColor": "transparent",
                          "textShadowBlur": 0,
                          "textShadowOffsetX": 0,
                          "textShadowOffsetY": 0,
                          "backgroundColor": "transparent",
                          "borderColor": "transparent",
                          "borderWidth": 0,
                          "borderRadius": [
                              0,
                              0,
                              0,
                              0
                          ],
                          "padding": [
                              0,
                              0,
                              0,
                              0
                          ],
                          "shadowColor": "transparent",
                          "shadowBlur": 0,
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0
                      },
                      "itemStyle": {
                          "color": null,
                          "borderColor": "#000",
                          "borderWidth": 0,
                          "borderType": "solid",
                          "barBorderRadius": [
                              0,
                              0,
                              0,
                              0
                          ],
                          "shadowBlur": 0,
                          "shadowColor": "#ccc",
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0,
                          "opacity": 1
                      }
                  },
                  "smooth": false,
                  "data": [
                      0,
                      891,
                      32.8,
                      8,
                      58,
                      494,
                      14,
                      1030,
                      424,
                      2666,
                      135,
                      4138,
                      15,
                      176,
                      194,
                      33,
                      148,
                      1399,
                      1064,
                      182,
                      696,
                      3219
                  ]
              },
              {
                  "id": "JOB_YWQD_-WYGZL2",
                  "name": "外业工作量里程",
                  "legendHoverLink": true,
                  "xAxisIndex": 0,
                  "yAxisIndex": 1,
                  "label": {
                      "show": true,
                      "position": "top",
                      "distance": 19,
                      "rotate": 0,
                      "offset": [
                          0,
                          0
                      ],
                      "formatter": "{c}",
                      "color": null,
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontFamily": "sans-serif",
                      "fontSize": 12,
                      "align": "center",
                      "verticalAlign": "auto",
                      "lineHeight": 15,
                      "textBorderColor": "transparent",
                      "textBorderWidth": 0,
                      "textShadowColor": "transparent",
                      "textShadowBlur": 0,
                      "textShadowOffsetX": 0,
                      "textShadowOffsetY": 0,
                      "backgroundColor": "transparent",
                      "borderColor": "transparent",
                      "borderWidth": 0,
                      "borderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "padding": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowColor": "transparent",
                      "shadowBlur": 0,
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0
                  },
                  "itemStyle": {
                      "color": "rgba(34, 148, 242, 1)",
                      "borderColor": "#000",
                      "borderWidth": 0,
                      "borderType": "solid",
                      "barBorderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowBlur": 0,
                      "shadowColor": "#ccc",
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0,
                      "opacity": 1
                  },
                  "type": "bar",
                  "barWidth": "57%",
                  "barGap": "30%",
                  "data": [
                      0,
                      1096,
                      201.8,
                      25,
                      790,
                      150,
                      190,
                      28,
                      944,
                      588,
                      812,
                      180,
                      158,
                      458,
                      0,
                      140.8,
                      1158,
                      1464.5,
                      1498.5,
                      1559,
                      941,
                      180.3
                  ]
              }
          ]
      },
      "otherOption": {
          "dataObtainType": 1,
          "conditionSql": "",
          "dataSetId": "067b1447-c242-43ac-9333-10dc63379c56",
          "dimensionList": [
              {
                  "dataSetId": "067b1447-c242-43ac-9333-10dc63379c56",
                  "tableAlias": "JOB_YWQD",
                  "tableName": "JOB_YWQD",
                  "column": "ZYY",
                  "alias": "作业员",
                  "type": "STRING",
                  "delete": false
              }
          ],
          "measureList": [
              {
                  "dataSetId": "067b1447-c242-43ac-9333-10dc63379c56",
                  "tableAlias": "JOB_YWQD",
                  "tableName": "JOB_YWQD",
                  "column": "WYGZL",
                  "alias": "外业工作量",
                  "type": "NUMBER",
                  "delete": false,
                  "gatherType": "SUM",
                  "sortType": null
              },
              {
                  "dataSetId": "067b1447-c242-43ac-9333-10dc63379c56",
                  "tableAlias": "JOB_YWQD",
                  "tableName": "JOB_YWQD",
                  "column": "WYGZL2",
                  "alias": "外业工作量里程",
                  "type": "NUMBER",
                  "delete": false,
                  "gatherType": "SUM",
                  "sortType": null
              }
          ],
          "whereList": [],
          "selected": false,
          "refresh": 1653878920658,
          "showLoading": false
      },
      "y": 93,
      "i": 1572863657493,
      "moved": false,
      "initOption": {
          "width": 1397,
          "height": 367
      }
  },
  {
      "x": 0,
      "w": 48,
      "h": 3,
      "chartsType": 0,
      "title": "筛选器",
      "renderComponent": "render-sizer",
      "configComponent": [
          {
              "name": "样式配置",
              "component": "style-sizer",
              "icon": "fa-sliders"
          },
          {
              "name": "数据配置",
              "component": "data-sizer",
              "icon": "fa-database"
          }
      ],
      "option": {
          "formEventQuery": 2,
          "formButton": {
              "queryIcon": "",
              "queryBgColor": null,
              "justifyContent": "center",
              "queryText": "查询",
              "showClear": true,
              "clearIcon": "",
              "clearText": "清除",
              "clearBgColor": null
          },
          "gridItemStyle": {
              "borderWidth": 0,
              "borderColor": null,
              "borderStyle": "solid",
              "borderRadius": [
                  0,
                  0,
                  0,
                  0
              ],
              "borderImageSource": null,
              "borderImageWidth": 0,
              "borderImageRepeat": "repeat",
              "backgroundColor": "rgba(255, 255, 255, 1)",
              "shadowColor": null,
              "shadowBlur": 0,
              "shadowOffsetX": 0,
              "shadowOffsetY": 0,
              "shadowSpread": 0,
              "backgroundImage": null,
              "backgroundWidthSize": 100,
              "backgroundHeightSize": 100,
              "backgroundRepeat": "no-repeat"
          },
          "formAttr": {
              "inline": true,
              "labelPosition": "right",
              "labelWidth": 80,
              "size": "medium"
          },
          "title": {
              "show": false,
              "text": "筛选器",
              "headerStyle": {
                  "height": 50,
                  "backgroundColor": "transparent"
              }
          },
          "margin": [
              17,
              10,
              0,
              10
          ]
      },
      "otherOption": {
          "componentList": [
              {
                  "formItem": {
                      "title": "文本输入控件",
                      "renderComponent": "render-text-input",
                      "configComponent": "style-text-input",
                      "option": {
                          "type": "text",
                          "placeholder": "请输入编号",
                          "label": "编号",
                          "clearable": true,
                          "size": "small",
                          "prefixIcon": "",
                          "suffixIcon": "",
                          "rows": 2,
                          "autofocus": false
                      },
                      "otherOption": {
                          "type": "STRING",
                          "tableName": "JOB_YWQD",
                          "column": "BH",
                          "value": null,
                          "conditionType": "LIKE",
                          "sortType": "ASC",
                          "format": null,
                          "dataSet": {
                              "dataSetId": "067b1447-c242-43ac-9333-10dc63379c56",
                              "tableAlias": "JOB_YWQD",
                              "tableName": "JOB_YWQD",
                              "column": "BH",
                              "alias": "编号",
                              "type": "STRING",
                              "delete": false
                          }
                      }
                  },
                  "dataSetId": "067b1447-c242-43ac-9333-10dc63379c56",
                  "tableAlias": "JOB_YWQD",
                  "tableName": "JOB_YWQD",
                  "column": "BH",
                  "alias": "编号",
                  "type": "STRING",
                  "delete": false
              },
              {
                  "formItem": {
                      "title": "文本输入控件",
                      "renderComponent": "render-text-input",
                      "configComponent": "style-text-input",
                      "option": {
                          "type": "text",
                          "placeholder": "请输入单位",
                          "label": "单位",
                          "clearable": true,
                          "size": "small",
                          "prefixIcon": "",
                          "suffixIcon": "",
                          "rows": 2,
                          "autofocus": false
                      },
                      "otherOption": {
                          "type": "STRING",
                          "tableName": "JOB_YWQD",
                          "column": "DW",
                          "value": null,
                          "conditionType": "LIKE",
                          "sortType": "ASC",
                          "format": null,
                          "dataSet": {
                              "dataSetId": "067b1447-c242-43ac-9333-10dc63379c56",
                              "tableAlias": "JOB_YWQD",
                              "tableName": "JOB_YWQD",
                              "column": "DW",
                              "alias": "单位",
                              "type": "STRING",
                              "delete": false
                          }
                      }
                  },
                  "dataSetId": "067b1447-c242-43ac-9333-10dc63379c56",
                  "tableAlias": "JOB_YWQD",
                  "tableName": "JOB_YWQD",
                  "column": "DW",
                  "alias": "单位",
                  "type": "STRING",
                  "delete": false
              }
          ],
          "selected": false,
          "refresh": 1653878920658,
          "showLoading": false
      },
      "y": 0,
      "i": 1572864581911,
      "moved": false,
      "initOption": {
          "width": 1397,
          "height": 67
      }
  },
  {
      "x": 7,
      "w": 10,
      "h": 10,
      "chartsType": 0,
      "title": "简单的柱形图",
      "renderComponent": "render-simple-bar-charts",
      "configComponent": [
          {
              "name": "样式配置",
              "component": "style-simple-bar-charts",
              "icon": "fa-sliders"
          },
          {
              "name": "数据配置",
              "component": "data-simple-bar-charts",
              "icon": "fa-database"
          }
      ],
      "option": {
          "gridItemStyle": {
              "borderWidth": 0,
              "borderColor": null,
              "borderStyle": "solid",
              "borderRadius": [
                  0,
                  0,
                  0,
                  0
              ],
              "borderImageSource": null,
              "borderImageWidth": 0,
              "borderImageRepeat": "repeat",
              "backgroundColor": null,
              "shadowColor": null,
              "shadowBlur": 0,
              "shadowOffsetX": 0,
              "shadowOffsetY": 0,
              "shadowSpread": 0,
              "backgroundImage": null,
              "backgroundWidthSize": 100,
              "backgroundHeightSize": 100,
              "backgroundRepeat": "no-repeat"
          },
          "title": {
              "show": true,
              "left": "center",
              "top": "auto",
              "right": "auto",
              "bottom": "auto",
              "textVerticalAlign": "center",
              "triggerEvent": false,
              "itemGap": 10,
              "backgroundColor": "transparent",
              "padding": [
                  5,
                  5,
                  5,
                  5
              ],
              "borderColor": "#ccc",
              "borderWidth": 0,
              "borderRadius": [
                  0,
                  0,
                  0,
                  0
              ],
              "shadowBlur": 0,
              "shadowColor": "transparent",
              "shadowOffsetX": 0,
              "shadowOffsetY": 0,
              "text": "简单柱形图主标题",
              "link": "",
              "target": "blank",
              "textStyle": {
                  "color": "#333",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 18,
                  "lineHeight": 20,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              },
              "subtext": "简单柱形图子标题",
              "sublink": "",
              "subtarget": "self",
              "subtextStyle": {
                  "color": "#aaa",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 12,
                  "align": "center",
                  "verticalAlign": "center",
                  "lineHeight": 16,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              }
          },
          "toolbox": {
              "show": false,
              "orient": "horizontal",
              "itemSize": 15,
              "itemGap": 10,
              "showTitle": true,
              "feature": {
                  "dataView": {
                      "show": true,
                      "readOnly": false
                  },
                  "restore": {
                      "show": true
                  },
                  "magicType": {
                      "type": [
                          "line",
                          "bar"
                      ],
                      "show": true
                  },
                  "saveAsImage": {
                      "show": true
                  }
              }
          },
          "legend": {
              "show": true,
              "type": "scroll",
              "zlevel": 0,
              "left": "auto",
              "top": "auto",
              "right": "auto",
              "bottom": "auto",
              "width": "auto",
              "height": "auto",
              "orient": "vertical",
              "align": "auto",
              "padding": [
                  5,
                  5,
                  5,
                  5
              ],
              "itemGap": 10,
              "itemWidth": 25,
              "itemHeight": 14,
              "symbolKeepAspect": true,
              "formatter": "{name}",
              "selectedMode": true,
              "inactiveColor": "#ccc",
              "textStyle": {
                  "backgroundColor": "transparent",
                  "borderColor": "transparent",
                  "borderWidth": 0,
                  "borderRadius": [
                      0,
                      0,
                      0,
                      0
                  ],
                  "padding": [
                      0,
                      0,
                      0,
                      0
                  ],
                  "shadowColor": "transparent",
                  "shadowBlur": 0,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "lineHeight": 30,
                  "color": "#333",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 12,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              },
              "backgroundColor": "transparent",
              "borderColor": "#ccc",
              "borderWidth": 0,
              "borderRadius": [
                  0,
                  0,
                  0,
                  0
              ],
              "shadowBlur": 0,
              "shadowColor": "#ccc",
              "shadowOffsetX": 0,
              "shadowOffsetY": 0
          },
          "tooltip": {
              "show": true,
              "trigger": "axis",
              "showContent": true,
              "alwaysShowContent": false,
              "triggerOn": "mousemove|click",
              "showDelay": 0,
              "hideDelay": 100,
              "transitionDuration": 0.4,
              "formatter": "",
              "axisPointer": {
                  "type": "shadow"
              },
              "backgroundColor": "rgba(50,50,50,0.7)",
              "borderColor": "#333",
              "borderWidth": 0,
              "padding": [
                  5,
                  5,
                  5,
                  5
              ],
              "textStyle": {
                  "color": "#fff",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 14,
                  "lineHeight": 25,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              }
          },
          "textStyle": {
              "color": "#000",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontFamily": "sans-serif",
              "fontSize": 12,
              "lineHeight": 30,
              "textBorderColor": "transparent",
              "textBorderWidth": 0,
              "textShadowColor": "transparent",
              "textShadowBlur": 0,
              "textShadowOffsetX": 0,
              "textShadowOffsetY": 0
          },
          "backgroundColor": "transparent",
          "color": [
              "#4b7bec",
              "#45aaf2",
              "#fd9644",
              "#a55eea",
              "#fc5c65",
              "#2bcbba",
              "#26de81",
              "#fd79a8",
              "#f7b731",
              "#778ca3",
              "#b2bec3"
          ],
          "grid": {
              "left": "3%",
              "right": "4%",
              "bottom": "3%",
              "containLabel": true
          },
          "xAxis": [
              {
                  "show": true,
                  "id": null,
                  "position": "bottom",
                  "offset": 0,
                  "type": "category",
                  "name": "",
                  "nameLocation": "end",
                  "nameTextStyle": {
                      "color": null,
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontFamily": "sans-serif",
                      "fontSize": 12,
                      "align": "auto",
                      "verticalAlign": "auto",
                      "lineHeight": 56,
                      "textBorderColor": "transparent",
                      "textBorderWidth": 0,
                      "textShadowColor": "transparent",
                      "textShadowBlur": 0,
                      "textShadowOffsetX": 0,
                      "textShadowOffsetY": 0,
                      "backgroundColor": "transparent",
                      "borderColor": "transparent",
                      "borderWidth": 0,
                      "borderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "padding": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowColor": "transparent",
                      "shadowBlur": 0,
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0
                  },
                  "boundaryGap": true,
                  "nameGap": 0,
                  "data": [
                      "Mon",
                      "Tue",
                      "Wed",
                      "Thu",
                      "Fri",
                      "Sat",
                      "Sun"
                  ],
                  "nameRotate": 0,
                  "inverse": false,
                  "axisLabel": {
                      "show": true,
                      "inside": false,
                      "rotate": 0,
                      "margin": 8,
                      "color": null,
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontFamily": "sans-serif",
                      "fontSize": 12,
                      "align": "auto",
                      "verticalAlign": "auto",
                      "lineHeight": 56,
                      "textBorderColor": "transparent",
                      "textBorderWidth": 0,
                      "textShadowColor": "transparent",
                      "textShadowBlur": 0,
                      "textShadowOffsetX": 0,
                      "textShadowOffsetY": 0,
                      "backgroundColor": "transparent",
                      "borderColor": "transparent",
                      "borderWidth": 0,
                      "borderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "padding": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowColor": "transparent",
                      "shadowBlur": 0,
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0
                  },
                  "axisLine": {
                      "show": true,
                      "onZero": true,
                      "symbol": [
                          "none",
                          "none"
                      ],
                      "symbolSize": [
                          10,
                          15
                      ],
                      "symbolOffset": [
                          0,
                          0
                      ],
                      "lineStyle": {
                          "color": "#333",
                          "width": 1,
                          "type": "solid",
                          "shadowBlur": 0,
                          "shadowColor": "#ccc",
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0,
                          "opacity": 1
                      }
                  },
                  "axisTick": {
                      "show": false,
                      "inside": false,
                      "length": 5,
                      "lineStyle": {
                          "color": "#333",
                          "width": 1,
                          "type": "solid",
                          "shadowBlur": 0,
                          "shadowColor": "#ccc",
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0,
                          "opacity": 1
                      }
                  }
              }
          ],
          "yAxis": [
              {
                  "id": null,
                  "show": true,
                  "position": "left",
                  "offset": 0,
                  "type": "value",
                  "name": "",
                  "nameLocation": "end",
                  "boundaryGap": true,
                  "nameTextStyle": {
                      "color": null,
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontFamily": "sans-serif",
                      "fontSize": 12,
                      "align": "auto",
                      "verticalAlign": "auto",
                      "lineHeight": 56,
                      "textBorderColor": "transparent",
                      "textBorderWidth": 0,
                      "textShadowColor": "transparent",
                      "textShadowBlur": 0,
                      "textShadowOffsetX": 0,
                      "textShadowOffsetY": 0,
                      "backgroundColor": "transparent",
                      "borderColor": "transparent",
                      "borderWidth": 0,
                      "borderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "padding": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowColor": "transparent",
                      "shadowBlur": 0,
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0
                  },
                  "nameGap": 15,
                  "axisLabel": {
                      "show": true,
                      "formatter": "{value} 单位",
                      "interval": 1,
                      "inside": false,
                      "rotate": 0,
                      "margin": 5,
                      "color": null,
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontFamily": "sans-serif",
                      "fontSize": 12,
                      "align": "right",
                      "verticalAlign": "middle",
                      "lineHeight": 56,
                      "textBorderColor": "transparent",
                      "textBorderWidth": 0,
                      "textShadowColor": "transparent",
                      "textShadowBlur": 0,
                      "textShadowOffsetX": 0,
                      "textShadowOffsetY": 0,
                      "backgroundColor": "transparent",
                      "borderColor": "transparent",
                      "borderWidth": 0,
                      "borderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "padding": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowColor": "transparent",
                      "shadowBlur": 0,
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0
                  },
                  "axisLine": {
                      "show": true,
                      "onZero": true,
                      "symbol": [
                          "none",
                          "none"
                      ],
                      "symbolSize": [
                          10,
                          15
                      ],
                      "symbolOffset": [
                          0,
                          0
                      ],
                      "lineStyle": {
                          "color": "#333",
                          "width": 1,
                          "type": "solid",
                          "shadowBlur": 0,
                          "shadowColor": "#ccc",
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0,
                          "opacity": 1
                      }
                  },
                  "axisTick": {
                      "show": false,
                      "inside": false,
                      "length": 5,
                      "lineStyle": {
                          "color": "#333",
                          "width": 1,
                          "type": "solid",
                          "shadowBlur": 0,
                          "shadowColor": "#ccc",
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0,
                          "opacity": 1
                      }
                  }
              }
          ],
          "series": [
              {
                  "id": null,
                  "name": "系列名称",
                  "legendHoverLink": true,
                  "xAxisIndex": 0,
                  "yAxisIndex": 0,
                  "label": {
                      "show": false,
                      "position": "top",
                      "distance": 0,
                      "rotate": 0,
                      "offset": [
                          0,
                          0
                      ],
                      "formatter": "{a}{b}{c}",
                      "color": null,
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontFamily": "sans-serif",
                      "fontSize": 12,
                      "align": "center",
                      "verticalAlign": "auto",
                      "lineHeight": 15,
                      "textBorderColor": "transparent",
                      "textBorderWidth": 0,
                      "textShadowColor": "transparent",
                      "textShadowBlur": 0,
                      "textShadowOffsetX": 0,
                      "textShadowOffsetY": 0,
                      "backgroundColor": "transparent",
                      "borderColor": "transparent",
                      "borderWidth": 0,
                      "borderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "padding": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowColor": "transparent",
                      "shadowBlur": 0,
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0
                  },
                  "itemStyle": {
                      "color": null,
                      "borderColor": "#000",
                      "borderWidth": 0,
                      "borderType": "solid",
                      "barBorderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowBlur": 0,
                      "shadowColor": "#ccc",
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0,
                      "opacity": 1
                  },
                  "type": "bar",
                  "barWidth": null,
                  "barGap": "30%",
                  "data": [
                      10,
                      52,
                      200,
                      334,
                      390,
                      330,
                      220
                  ]
              }
          ]
      },
      "otherOption": {
          "dataObtainType": 0,
          "conditionSql": "",
          "dataSetId": null,
          "dimensionList": [],
          "measureList": [],
          "whereList": [],
          "selected": false,
          "refresh": 1653878920658,
          "showLoading": false
      },
      "y": 12,
      "i": 1631696733450,
      "moved": false,
      "initOption": {
          "width": 285,
          "height": 242
      }
  },
  {
      "x": 31,
      "w": 10,
      "h": 10,
      "chartsType": 0,
      "title": "简单表格",
      "renderComponent": "render-simple-table",
      "configComponent": [
          {
              "name": "样式配置",
              "component": "style-simple-table",
              "icon": "fa-sliders"
          },
          {
              "name": "数据配置",
              "component": "data-simple-table",
              "icon": "fa-database"
          }
      ],
      "option": {
          "gridItemStyle": {
              "borderWidth": 0,
              "borderColor": null,
              "borderStyle": "solid",
              "borderRadius": [
                  0,
                  0,
                  0,
                  0
              ],
              "borderImageSource": null,
              "borderImageWidth": 0,
              "borderImageRepeat": "repeat",
              "backgroundColor": null,
              "shadowColor": null,
              "shadowBlur": 0,
              "shadowOffsetX": 0,
              "shadowOffsetY": 0,
              "shadowSpread": 0,
              "backgroundImage": null,
              "backgroundWidthSize": 100,
              "backgroundHeightSize": 100,
              "backgroundRepeat": "no-repeat"
          },
          "tableAttr": {
              "stripe": false,
              "border": true,
              "size": "small",
              "fit": true,
              "showHeader": true,
              "tableHeaderHeight": 0,
              "highlightCurrentRow": false,
              "emptyText": "暂无数据",
              "showSummary": true,
              "sumText": "合计"
          },
          "title": {
              "show": true,
              "text": "简单表格",
              "showDownload": true,
              "downloadLocation": "left",
              "downloadColor": "#000000",
              "downloadBaColor": "transparent",
              "headerStyle": {
                  "height": 50,
                  "backgroundColor": "transparent"
              }
          },
          "tableHeaderCellStyle": {
              "color": null,
              "backgroundColor": null,
              "fontSize": "15px",
              "fontWeight": 400
          },
          "tableHeader": [
              {
                  "prop": "id",
                  "label": "ID",
                  "minWidth": null,
                  "fixed": false,
                  "resizable": true,
                  "showOverflowTooltip": true,
                  "align": "center",
                  "unit": ""
              },
              {
                  "prop": "name",
                  "label": "名字",
                  "minWidth": null,
                  "fixed": false,
                  "resizable": true,
                  "showOverflowTooltip": true,
                  "align": "center",
                  "unit": ""
              },
              {
                  "prop": "amount",
                  "label": "数量",
                  "sum": "200",
                  "minWidth": null,
                  "fixed": false,
                  "resizable": true,
                  "showOverflowTooltip": true,
                  "align": "center",
                  "unit": ""
              }
          ],
          "tableData": [
              {
                  "id": "12987122'",
                  "name": "王小虎",
                  "amount": "234"
              },
              {
                  "id": "12987123",
                  "name": "王小虎",
                  "amount": "165"
              },
              {
                  "id": "12987124",
                  "name": "王小虎",
                  "amount": "324"
              },
              {
                  "id": "12987124",
                  "name": "王小虎",
                  "amount": "324"
              },
              {
                  "id": "12987124",
                  "name": "王小虎",
                  "amount": "324"
              }
          ]
      },
      "otherOption": {
          "dataObtainType": 0,
          "conditionSql": "",
          "dataSetId": null,
          "dimensionList": [],
          "measureList": [],
          "whereList": [],
          "selected": false,
          "refresh": 1653878920658,
          "showLoading": false
      },
      "y": 3,
      "i": 1631696736677,
      "moved": false,
      "initOption": {
          "width": 285,
          "height": 242
      }
  },
  {
      "x": 3,
      "y": 3,
      "w": 24,
      "h": 9,
      "chartsType": 0,
      "title": "多Y轴柱形图",
      "renderComponent": "render-multiple-yAxis-bar-charts",
      "configComponent": [
          {
              "name": "样式配置",
              "component": "style-multiple-yAxis-bar-charts",
              "icon": "fa-sliders"
          },
          {
              "name": "数据配置",
              "component": "data-multiple-yAxis-bar-charts",
              "icon": "fa-database"
          }
      ],
      "option": {
          "gridItemStyle": {
              "borderWidth": 0,
              "borderColor": null,
              "borderStyle": "solid",
              "borderRadius": [
                  0,
                  0,
                  0,
                  0
              ],
              "borderImageSource": null,
              "borderImageWidth": 0,
              "borderImageRepeat": "repeat",
              "backgroundColor": null,
              "shadowColor": null,
              "shadowBlur": 0,
              "shadowOffsetX": 0,
              "shadowOffsetY": 0,
              "shadowSpread": 0,
              "backgroundImage": null,
              "backgroundWidthSize": 100,
              "backgroundHeightSize": 100,
              "backgroundRepeat": "no-repeat"
          },
          "title": {
              "show": true,
              "left": "center",
              "top": "auto",
              "right": "auto",
              "bottom": "auto",
              "textVerticalAlign": "center",
              "triggerEvent": false,
              "itemGap": 10,
              "backgroundColor": "transparent",
              "padding": [
                  5,
                  5,
                  5,
                  5
              ],
              "borderColor": "#ccc",
              "borderWidth": 0,
              "borderRadius": [
                  0,
                  0,
                  0,
                  0
              ],
              "shadowBlur": 0,
              "shadowColor": "transparent",
              "shadowOffsetX": 0,
              "shadowOffsetY": 0,
              "text": "多Y轴柱形图主标题",
              "link": "",
              "target": "blank",
              "textStyle": {
                  "color": "#333",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 18,
                  "lineHeight": 20,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              },
              "subtext": "多Y轴柱形图子标题",
              "sublink": "",
              "subtarget": "self",
              "subtextStyle": {
                  "color": "#aaa",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 12,
                  "align": "center",
                  "verticalAlign": "center",
                  "lineHeight": 16,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              }
          },
          "toolbox": {
              "show": false,
              "orient": "horizontal",
              "itemSize": 15,
              "itemGap": 10,
              "showTitle": true,
              "feature": {
                  "dataView": {
                      "show": true,
                      "readOnly": false
                  },
                  "restore": {
                      "show": true
                  },
                  "magicType": {
                      "type": [
                          "line",
                          "bar"
                      ],
                      "show": true
                  },
                  "saveAsImage": {
                      "show": true
                  }
              }
          },
          "legend": {
              "show": true,
              "type": "scroll",
              "zlevel": 0,
              "left": "auto",
              "top": "auto",
              "right": "auto",
              "bottom": "auto",
              "width": "auto",
              "height": "auto",
              "orient": "vertical",
              "align": "auto",
              "padding": [
                  5,
                  5,
                  5,
                  5
              ],
              "itemGap": 10,
              "itemWidth": 25,
              "itemHeight": 14,
              "symbolKeepAspect": true,
              "formatter": "{name}",
              "selectedMode": true,
              "inactiveColor": "#ccc",
              "textStyle": {
                  "backgroundColor": "transparent",
                  "borderColor": "transparent",
                  "borderWidth": 0,
                  "borderRadius": [
                      0,
                      0,
                      0,
                      0
                  ],
                  "padding": [
                      0,
                      0,
                      0,
                      0
                  ],
                  "shadowColor": "transparent",
                  "shadowBlur": 0,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "lineHeight": 30,
                  "color": "#333",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 12,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              },
              "backgroundColor": "transparent",
              "borderColor": "#ccc",
              "borderWidth": 0,
              "borderRadius": [
                  0,
                  0,
                  0,
                  0
              ],
              "shadowBlur": 0,
              "shadowColor": "#ccc",
              "shadowOffsetX": 0,
              "shadowOffsetY": 0
          },
          "tooltip": {
              "show": true,
              "trigger": "axis",
              "showContent": true,
              "alwaysShowContent": false,
              "triggerOn": "mousemove|click",
              "showDelay": 0,
              "hideDelay": 100,
              "transitionDuration": 0.4,
              "formatter": "",
              "axisPointer": {
                  "type": "shadow"
              },
              "backgroundColor": "rgba(50,50,50,0.7)",
              "borderColor": "#333",
              "borderWidth": 0,
              "padding": [
                  5,
                  5,
                  5,
                  5
              ],
              "textStyle": {
                  "color": "#fff",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 14,
                  "lineHeight": 25,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              }
          },
          "textStyle": {
              "color": "#000",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontFamily": "sans-serif",
              "fontSize": 12,
              "lineHeight": 30,
              "textBorderColor": "transparent",
              "textBorderWidth": 0,
              "textShadowColor": "transparent",
              "textShadowBlur": 0,
              "textShadowOffsetX": 0,
              "textShadowOffsetY": 0
          },
          "backgroundColor": "transparent",
          "color": [
              "#4b7bec",
              "#45aaf2",
              "#fd9644",
              "#a55eea",
              "#fc5c65",
              "#2bcbba",
              "#26de81",
              "#fd79a8",
              "#f7b731",
              "#778ca3",
              "#b2bec3"
          ],
          "grid": {
              "left": "3%",
              "right": "4%",
              "bottom": "3%",
              "containLabel": true
          },
          "xAxis": [
              {
                  "show": true,
                  "id": null,
                  "position": "bottom",
                  "offset": 0,
                  "type": "category",
                  "name": "",
                  "nameLocation": "end",
                  "nameTextStyle": {
                      "color": null,
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontFamily": "sans-serif",
                      "fontSize": 12,
                      "align": "auto",
                      "verticalAlign": "auto",
                      "lineHeight": 56,
                      "textBorderColor": "transparent",
                      "textBorderWidth": 0,
                      "textShadowColor": "transparent",
                      "textShadowBlur": 0,
                      "textShadowOffsetX": 0,
                      "textShadowOffsetY": 0,
                      "backgroundColor": "transparent",
                      "borderColor": "transparent",
                      "borderWidth": 0,
                      "borderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "padding": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowColor": "transparent",
                      "shadowBlur": 0,
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0
                  },
                  "boundaryGap": true,
                  "nameGap": 0,
                  "data": [
                      "Mon",
                      "Tue",
                      "Wed",
                      "Thu",
                      "Fri",
                      "Sat",
                      "Sun"
                  ],
                  "nameRotate": 0,
                  "inverse": false,
                  "axisLabel": {
                      "show": true,
                      "inside": false,
                      "rotate": 0,
                      "margin": 8,
                      "color": null,
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontFamily": "sans-serif",
                      "fontSize": 12,
                      "align": "auto",
                      "verticalAlign": "auto",
                      "lineHeight": 56,
                      "textBorderColor": "transparent",
                      "textBorderWidth": 0,
                      "textShadowColor": "transparent",
                      "textShadowBlur": 0,
                      "textShadowOffsetX": 0,
                      "textShadowOffsetY": 0,
                      "backgroundColor": "transparent",
                      "borderColor": "transparent",
                      "borderWidth": 0,
                      "borderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "padding": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowColor": "transparent",
                      "shadowBlur": 0,
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0
                  },
                  "axisLine": {
                      "show": true,
                      "onZero": true,
                      "symbol": [
                          "none",
                          "none"
                      ],
                      "symbolSize": [
                          10,
                          15
                      ],
                      "symbolOffset": [
                          0,
                          0
                      ],
                      "lineStyle": {
                          "color": "#333",
                          "width": 1,
                          "type": "solid",
                          "shadowBlur": 0,
                          "shadowColor": "#ccc",
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0,
                          "opacity": 1
                      }
                  },
                  "axisTick": {
                      "show": false,
                      "inside": false,
                      "length": 5,
                      "lineStyle": {
                          "color": "#333",
                          "width": 1,
                          "type": "solid",
                          "shadowBlur": 0,
                          "shadowColor": "#ccc",
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0,
                          "opacity": 1
                      }
                  }
              }
          ],
          "yAxis": [
              {
                  "id": null,
                  "show": true,
                  "position": "left",
                  "offset": 0,
                  "type": "value",
                  "name": "",
                  "nameLocation": "end",
                  "boundaryGap": true,
                  "nameTextStyle": {
                      "color": null,
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontFamily": "sans-serif",
                      "fontSize": 12,
                      "align": "auto",
                      "verticalAlign": "auto",
                      "lineHeight": 56,
                      "textBorderColor": "transparent",
                      "textBorderWidth": 0,
                      "textShadowColor": "transparent",
                      "textShadowBlur": 0,
                      "textShadowOffsetX": 0,
                      "textShadowOffsetY": 0,
                      "backgroundColor": "transparent",
                      "borderColor": "transparent",
                      "borderWidth": 0,
                      "borderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "padding": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowColor": "transparent",
                      "shadowBlur": 0,
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0
                  },
                  "nameGap": 15,
                  "axisLabel": {
                      "show": true,
                      "formatter": "{value} 单位",
                      "interval": 1,
                      "inside": false,
                      "rotate": 0,
                      "margin": 5,
                      "color": null,
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontFamily": "sans-serif",
                      "fontSize": 12,
                      "align": "right",
                      "verticalAlign": "middle",
                      "lineHeight": 56,
                      "textBorderColor": "transparent",
                      "textBorderWidth": 0,
                      "textShadowColor": "transparent",
                      "textShadowBlur": 0,
                      "textShadowOffsetX": 0,
                      "textShadowOffsetY": 0,
                      "backgroundColor": "transparent",
                      "borderColor": "transparent",
                      "borderWidth": 0,
                      "borderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "padding": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowColor": "transparent",
                      "shadowBlur": 0,
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0
                  },
                  "axisLine": {
                      "show": true,
                      "onZero": true,
                      "symbol": [
                          "none",
                          "none"
                      ],
                      "symbolSize": [
                          10,
                          15
                      ],
                      "symbolOffset": [
                          0,
                          0
                      ],
                      "lineStyle": {
                          "color": "#333",
                          "width": 1,
                          "type": "solid",
                          "shadowBlur": 0,
                          "shadowColor": "#ccc",
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0,
                          "opacity": 1
                      }
                  },
                  "axisTick": {
                      "show": false,
                      "inside": false,
                      "length": 5,
                      "lineStyle": {
                          "color": "#333",
                          "width": 1,
                          "type": "solid",
                          "shadowBlur": 0,
                          "shadowColor": "#ccc",
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0,
                          "opacity": 1
                      }
                  }
              }
          ],
          "series": [
              {
                  "id": null,
                  "name": "系列名称",
                  "legendHoverLink": true,
                  "xAxisIndex": 0,
                  "yAxisIndex": 0,
                  "label": {
                      "show": false,
                      "position": "top",
                      "distance": 0,
                      "rotate": 0,
                      "offset": [
                          0,
                          0
                      ],
                      "formatter": "{a}{b}{c}",
                      "color": null,
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontFamily": "sans-serif",
                      "fontSize": 12,
                      "align": "center",
                      "verticalAlign": "auto",
                      "lineHeight": 15,
                      "textBorderColor": "transparent",
                      "textBorderWidth": 0,
                      "textShadowColor": "transparent",
                      "textShadowBlur": 0,
                      "textShadowOffsetX": 0,
                      "textShadowOffsetY": 0,
                      "backgroundColor": "transparent",
                      "borderColor": "transparent",
                      "borderWidth": 0,
                      "borderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "padding": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowColor": "transparent",
                      "shadowBlur": 0,
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0
                  },
                  "itemStyle": {
                      "color": null,
                      "borderColor": "#000",
                      "borderWidth": 0,
                      "borderType": "solid",
                      "barBorderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowBlur": 0,
                      "shadowColor": "#ccc",
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0,
                      "opacity": 1
                  },
                  "type": "bar",
                  "barWidth": null,
                  "barGap": "30%",
                  "data": [
                      10,
                      52,
                      200,
                      334,
                      390,
                      330,
                      220
                  ]
              }
          ]
      },
      "otherOption": {
          "dataObtainType": 0,
          "conditionSql": "",
          "dataSetId": null,
          "dimensionList": [],
          "measureList": [],
          "whereList": [],
          "selected": false,
          "refresh": 1653878920658,
          "showLoading": false
      },
      "i": 1653878819116,
      "initOption": {
          "width": 695,
          "height": 217
      },
      "moved": false
  },
  {
      "x": 1,
      "y": 22,
      "w": 16,
      "h": 11,
      "chartsType": 0,
      "title": "简单饼图",
      "renderComponent": "render-simple-pie-charts",
      "configComponent": [
          {
              "name": "样式配置",
              "component": "style-simple-pie-charts",
              "icon": "fa-sliders"
          },
          {
              "name": "数据配置",
              "component": "data-simple-pie-charts",
              "icon": "fa-database"
          }
      ],
      "option": {
          "gridItemStyle": {
              "borderWidth": 0,
              "borderColor": null,
              "borderStyle": "solid",
              "borderRadius": [
                  0,
                  0,
                  0,
                  0
              ],
              "borderImageSource": null,
              "borderImageWidth": 0,
              "borderImageRepeat": "repeat",
              "backgroundColor": null,
              "shadowColor": null,
              "shadowBlur": 0,
              "shadowOffsetX": 0,
              "shadowOffsetY": 0,
              "shadowSpread": 0,
              "backgroundImage": null,
              "backgroundWidthSize": 100,
              "backgroundHeightSize": 100,
              "backgroundRepeat": "no-repeat"
          },
          "title": {
              "show": true,
              "left": "center",
              "top": "auto",
              "right": "auto",
              "bottom": "auto",
              "textVerticalAlign": "center",
              "triggerEvent": false,
              "itemGap": 10,
              "backgroundColor": "transparent",
              "padding": [
                  5,
                  5,
                  5,
                  5
              ],
              "borderColor": "#ccc",
              "borderWidth": 0,
              "borderRadius": [
                  0,
                  0,
                  0,
                  0
              ],
              "shadowBlur": 0,
              "shadowColor": "transparent",
              "shadowOffsetX": 0,
              "shadowOffsetY": 0,
              "text": "简单饼图主标题",
              "link": "",
              "target": "blank",
              "textStyle": {
                  "color": "#333",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 18,
                  "lineHeight": 20,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              },
              "subtext": "简单饼图子标题",
              "sublink": "",
              "subtarget": "self",
              "subtextStyle": {
                  "color": "#aaa",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 12,
                  "align": "center",
                  "verticalAlign": "center",
                  "lineHeight": 16,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              }
          },
          "toolbox": {
              "show": false,
              "orient": "horizontal",
              "itemSize": 15,
              "itemGap": 10,
              "showTitle": true,
              "feature": {
                  "dataView": {
                      "show": true,
                      "readOnly": false
                  },
                  "restore": {
                      "show": true
                  },
                  "magicType": {
                      "type": [
                          "line",
                          "bar"
                      ],
                      "show": true
                  },
                  "saveAsImage": {
                      "show": true
                  }
              }
          },
          "legend": {
              "show": true,
              "type": "scroll",
              "zlevel": 0,
              "left": "auto",
              "top": "auto",
              "right": "auto",
              "bottom": "auto",
              "width": "auto",
              "height": "auto",
              "orient": "vertical",
              "align": "auto",
              "padding": [
                  5,
                  5,
                  5,
                  5
              ],
              "itemGap": 10,
              "itemWidth": 25,
              "itemHeight": 14,
              "symbolKeepAspect": true,
              "formatter": "{name}",
              "selectedMode": true,
              "inactiveColor": "#ccc",
              "textStyle": {
                  "backgroundColor": "transparent",
                  "borderColor": "transparent",
                  "borderWidth": 0,
                  "borderRadius": [
                      0,
                      0,
                      0,
                      0
                  ],
                  "padding": [
                      0,
                      0,
                      0,
                      0
                  ],
                  "shadowColor": "transparent",
                  "shadowBlur": 0,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "lineHeight": 30,
                  "color": "#333",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 12,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              },
              "backgroundColor": "transparent",
              "borderColor": "#ccc",
              "borderWidth": 0,
              "borderRadius": [
                  0,
                  0,
                  0,
                  0
              ],
              "shadowBlur": 0,
              "shadowColor": "#ccc",
              "shadowOffsetX": 0,
              "shadowOffsetY": 0
          },
          "tooltip": {
              "show": true,
              "trigger": "axis",
              "showContent": true,
              "alwaysShowContent": false,
              "triggerOn": "mousemove|click",
              "showDelay": 0,
              "hideDelay": 100,
              "transitionDuration": 0.4,
              "formatter": "",
              "axisPointer": {
                  "type": "shadow"
              },
              "backgroundColor": "rgba(50,50,50,0.7)",
              "borderColor": "#333",
              "borderWidth": 0,
              "padding": [
                  5,
                  5,
                  5,
                  5
              ],
              "textStyle": {
                  "color": "#fff",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 14,
                  "lineHeight": 25,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              }
          },
          "textStyle": {
              "color": "#000",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontFamily": "sans-serif",
              "fontSize": 12,
              "lineHeight": 30,
              "textBorderColor": "transparent",
              "textBorderWidth": 0,
              "textShadowColor": "transparent",
              "textShadowBlur": 0,
              "textShadowOffsetX": 0,
              "textShadowOffsetY": 0
          },
          "backgroundColor": "transparent",
          "color": [
              "#4b7bec",
              "#45aaf2",
              "#fd9644",
              "#a55eea",
              "#fc5c65",
              "#2bcbba",
              "#26de81",
              "#fd79a8",
              "#f7b731",
              "#778ca3",
              "#b2bec3"
          ],
          "series": [
              {
                  "id": null,
                  "name": "访问来源",
                  "type": "pie",
                  "legendHoverLink": true,
                  "hoverAnimation": true,
                  "hoverOffset": 10,
                  "selectedMode": false,
                  "selectedOffset": 10,
                  "clockwise": true,
                  "startAngle": 90,
                  "minAngle": 0,
                  "minShowLabelAngle": 0,
                  "roseType": false,
                  "avoidLabelOverlap": true,
                  "stillShowZeroSum": true,
                  "cursor": "pointer",
                  "label": {
                      "show": false,
                      "position": "outside",
                      "distance": 0,
                      "rotate": 0,
                      "offset": [
                          0,
                          0
                      ],
                      "formatter": "{a}{b}{c}",
                      "color": null,
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontFamily": "sans-serif",
                      "fontSize": 12,
                      "align": "center",
                      "verticalAlign": "auto",
                      "lineHeight": 15,
                      "textBorderColor": "transparent",
                      "textBorderWidth": 0,
                      "textShadowColor": "transparent",
                      "textShadowBlur": 0,
                      "textShadowOffsetX": 0,
                      "textShadowOffsetY": 0,
                      "backgroundColor": "transparent",
                      "borderColor": "transparent",
                      "borderWidth": 0,
                      "borderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "padding": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowColor": "transparent",
                      "shadowBlur": 0,
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0
                  },
                  "labelLine": {
                      "show": false,
                      "length": null,
                      "length2": null,
                      "smooth": false,
                      "lineStyle": {
                          "color": null,
                          "width": 1,
                          "type": "solid",
                          "shadowBlur": 1,
                          "shadowColor": null,
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0,
                          "opacity": 1
                      },
                      "emphasis": {
                          "show": false,
                          "lineStyle": {
                              "color": null,
                              "width": 1,
                              "type": "solid",
                              "shadowBlur": 1,
                              "shadowColor": null,
                              "shadowOffsetX": 0,
                              "shadowOffsetY": 0,
                              "opacity": 1
                          }
                      }
                  },
                  "itemStyle": {
                      "color": null,
                      "borderColor": "#000",
                      "borderWidth": 0,
                      "borderType": "solid",
                      "barBorderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowBlur": 0,
                      "shadowColor": "#ccc",
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0,
                      "opacity": 1
                  },
                  "emphasis": {
                      "label": {
                          "show": false,
                          "position": "top",
                          "distance": 0,
                          "rotate": 0,
                          "offset": [
                              0,
                              0
                          ],
                          "formatter": "{a}{b}{c}",
                          "color": null,
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                          "fontFamily": "sans-serif",
                          "fontSize": 12,
                          "align": "center",
                          "verticalAlign": "auto",
                          "lineHeight": 15,
                          "textBorderColor": "transparent",
                          "textBorderWidth": 0,
                          "textShadowColor": "transparent",
                          "textShadowBlur": 0,
                          "textShadowOffsetX": 0,
                          "textShadowOffsetY": 0,
                          "backgroundColor": "transparent",
                          "borderColor": "transparent",
                          "borderWidth": 0,
                          "borderRadius": [
                              0,
                              0,
                              0,
                              0
                          ],
                          "padding": [
                              0,
                              0,
                              0,
                              0
                          ],
                          "shadowColor": "transparent",
                          "shadowBlur": 0,
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0
                      },
                      "itemStyle": {
                          "color": null,
                          "borderColor": "#000",
                          "borderWidth": 0,
                          "borderType": "solid",
                          "barBorderRadius": [
                              0,
                              0,
                              0,
                              0
                          ],
                          "shadowBlur": 0,
                          "shadowColor": "#ccc",
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0,
                          "opacity": 1
                      }
                  },
                  "radius": [
                      0,
                      "75%"
                  ],
                  "center": [
                      "50%",
                      "50%"
                  ],
                  "data": [
                      {
                          "value": 335,
                          "name": "直接访问"
                      },
                      {
                          "value": 310,
                          "name": "邮件营销"
                      },
                      {
                          "value": 234,
                          "name": "联盟广告"
                      },
                      {
                          "value": 135,
                          "name": "视频广告"
                      },
                      {
                          "value": 1548,
                          "name": "搜索引擎"
                      }
                  ]
              }
          ]
      },
      "otherOption": {
          "dataObtainType": 0,
          "conditionSql": "",
          "dataSetId": null,
          "dimensionList": [],
          "measureList": [],
          "whereList": [],
          "selected": false,
          "refresh": 1653879576487.9775,
          "showLoading": false
      },
      "i": 1653878890588,
      "initOption": {
          "width": 460,
          "height": 267
      },
      "moved": false
  },
  {
      "x": 33,
      "y": 13,
      "w": 15,
      "h": 15,
      "chartsType": 0,
      "title": "简单折线图",
      "renderComponent": "render-simple-line-charts",
      "configComponent": [
          {
              "name": "样式配置",
              "component": "style-simple-line-charts",
              "icon": "fa-sliders"
          },
          {
              "name": "数据配置",
              "component": "data-simple-line-charts",
              "icon": "fa-database"
          }
      ],
      "option": {
          "gridItemStyle": {
              "borderWidth": 0,
              "borderColor": null,
              "borderStyle": "solid",
              "borderRadius": [
                  0,
                  0,
                  0,
                  0
              ],
              "borderImageSource": null,
              "borderImageWidth": 0,
              "borderImageRepeat": "repeat",
              "backgroundColor": null,
              "shadowColor": null,
              "shadowBlur": 0,
              "shadowOffsetX": 0,
              "shadowOffsetY": 0,
              "shadowSpread": 0,
              "backgroundImage": null,
              "backgroundWidthSize": 100,
              "backgroundHeightSize": 100,
              "backgroundRepeat": "no-repeat"
          },
          "title": {
              "show": true,
              "left": "center",
              "top": "auto",
              "right": "auto",
              "bottom": "auto",
              "textVerticalAlign": "center",
              "triggerEvent": false,
              "itemGap": 10,
              "backgroundColor": "transparent",
              "padding": [
                  5,
                  5,
                  5,
                  5
              ],
              "borderColor": "#ccc",
              "borderWidth": 0,
              "borderRadius": [
                  0,
                  0,
                  0,
                  0
              ],
              "shadowBlur": 0,
              "shadowColor": "transparent",
              "shadowOffsetX": 0,
              "shadowOffsetY": 0,
              "text": "简单折线图主标题",
              "link": "",
              "target": "blank",
              "textStyle": {
                  "color": "#333",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 18,
                  "lineHeight": 20,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              },
              "subtext": "简单折线图子标题",
              "sublink": "",
              "subtarget": "self",
              "subtextStyle": {
                  "color": "#aaa",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 12,
                  "align": "center",
                  "verticalAlign": "center",
                  "lineHeight": 16,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              }
          },
          "toolbox": {
              "show": false,
              "orient": "horizontal",
              "itemSize": 15,
              "itemGap": 10,
              "showTitle": true,
              "feature": {
                  "dataView": {
                      "show": true,
                      "readOnly": false
                  },
                  "restore": {
                      "show": true
                  },
                  "magicType": {
                      "type": [
                          "line",
                          "bar"
                      ],
                      "show": true
                  },
                  "saveAsImage": {
                      "show": true
                  }
              }
          },
          "legend": {
              "show": true,
              "type": "scroll",
              "zlevel": 0,
              "left": "auto",
              "top": "auto",
              "right": "auto",
              "bottom": "auto",
              "width": "auto",
              "height": "auto",
              "orient": "vertical",
              "align": "auto",
              "padding": [
                  5,
                  5,
                  5,
                  5
              ],
              "itemGap": 10,
              "itemWidth": 25,
              "itemHeight": 14,
              "symbolKeepAspect": true,
              "formatter": "{name}",
              "selectedMode": true,
              "inactiveColor": "#ccc",
              "textStyle": {
                  "backgroundColor": "transparent",
                  "borderColor": "transparent",
                  "borderWidth": 0,
                  "borderRadius": [
                      0,
                      0,
                      0,
                      0
                  ],
                  "padding": [
                      0,
                      0,
                      0,
                      0
                  ],
                  "shadowColor": "transparent",
                  "shadowBlur": 0,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "lineHeight": 30,
                  "color": "#333",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 12,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              },
              "backgroundColor": "transparent",
              "borderColor": "#ccc",
              "borderWidth": 0,
              "borderRadius": [
                  0,
                  0,
                  0,
                  0
              ],
              "shadowBlur": 0,
              "shadowColor": "#ccc",
              "shadowOffsetX": 0,
              "shadowOffsetY": 0
          },
          "tooltip": {
              "show": true,
              "trigger": "axis",
              "showContent": true,
              "alwaysShowContent": false,
              "triggerOn": "mousemove|click",
              "showDelay": 0,
              "hideDelay": 100,
              "transitionDuration": 0.4,
              "formatter": "",
              "axisPointer": {
                  "type": "shadow"
              },
              "backgroundColor": "rgba(50,50,50,0.7)",
              "borderColor": "#333",
              "borderWidth": 0,
              "padding": [
                  5,
                  5,
                  5,
                  5
              ],
              "textStyle": {
                  "color": "#fff",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 14,
                  "lineHeight": 25,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              }
          },
          "textStyle": {
              "color": "#000",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontFamily": "sans-serif",
              "fontSize": 12,
              "lineHeight": 30,
              "textBorderColor": "transparent",
              "textBorderWidth": 0,
              "textShadowColor": "transparent",
              "textShadowBlur": 0,
              "textShadowOffsetX": 0,
              "textShadowOffsetY": 0
          },
          "backgroundColor": "transparent",
          "color": [
              "#4b7bec",
              "#45aaf2",
              "#fd9644",
              "#a55eea",
              "#fc5c65",
              "#2bcbba",
              "#26de81",
              "#fd79a8",
              "#f7b731",
              "#778ca3",
              "#b2bec3"
          ],
          "xAxis": [
              {
                  "show": true,
                  "id": null,
                  "position": "bottom",
                  "offset": 0,
                  "type": "category",
                  "name": "",
                  "nameLocation": "end",
                  "nameTextStyle": {
                      "color": null,
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontFamily": "sans-serif",
                      "fontSize": 12,
                      "align": "auto",
                      "verticalAlign": "auto",
                      "lineHeight": 56,
                      "textBorderColor": "transparent",
                      "textBorderWidth": 0,
                      "textShadowColor": "transparent",
                      "textShadowBlur": 0,
                      "textShadowOffsetX": 0,
                      "textShadowOffsetY": 0,
                      "backgroundColor": "transparent",
                      "borderColor": "transparent",
                      "borderWidth": 0,
                      "borderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "padding": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowColor": "transparent",
                      "shadowBlur": 0,
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0
                  },
                  "boundaryGap": true,
                  "nameGap": 0,
                  "data": [
                      "Mon",
                      "Tue",
                      "Wed",
                      "Thu",
                      "Fri",
                      "Sat",
                      "Sun"
                  ],
                  "nameRotate": 0,
                  "inverse": false,
                  "axisLabel": {
                      "show": true,
                      "inside": false,
                      "rotate": 0,
                      "margin": 8,
                      "color": null,
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontFamily": "sans-serif",
                      "fontSize": 12,
                      "align": "auto",
                      "verticalAlign": "auto",
                      "lineHeight": 56,
                      "textBorderColor": "transparent",
                      "textBorderWidth": 0,
                      "textShadowColor": "transparent",
                      "textShadowBlur": 0,
                      "textShadowOffsetX": 0,
                      "textShadowOffsetY": 0,
                      "backgroundColor": "transparent",
                      "borderColor": "transparent",
                      "borderWidth": 0,
                      "borderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "padding": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowColor": "transparent",
                      "shadowBlur": 0,
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0
                  },
                  "axisLine": {
                      "show": true,
                      "onZero": true,
                      "symbol": [
                          "none",
                          "none"
                      ],
                      "symbolSize": [
                          10,
                          15
                      ],
                      "symbolOffset": [
                          0,
                          0
                      ],
                      "lineStyle": {
                          "color": "#333",
                          "width": 1,
                          "type": "solid",
                          "shadowBlur": 0,
                          "shadowColor": "#ccc",
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0,
                          "opacity": 1
                      }
                  },
                  "axisTick": {
                      "show": false,
                      "inside": false,
                      "length": 5,
                      "lineStyle": {
                          "color": "#333",
                          "width": 1,
                          "type": "solid",
                          "shadowBlur": 0,
                          "shadowColor": "#ccc",
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0,
                          "opacity": 1
                      }
                  }
              }
          ],
          "yAxis": [
              {
                  "id": null,
                  "show": true,
                  "position": "left",
                  "offset": 0,
                  "type": "value",
                  "name": "",
                  "nameLocation": "end",
                  "boundaryGap": true,
                  "nameTextStyle": {
                      "color": null,
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontFamily": "sans-serif",
                      "fontSize": 12,
                      "align": "auto",
                      "verticalAlign": "auto",
                      "lineHeight": 56,
                      "textBorderColor": "transparent",
                      "textBorderWidth": 0,
                      "textShadowColor": "transparent",
                      "textShadowBlur": 0,
                      "textShadowOffsetX": 0,
                      "textShadowOffsetY": 0,
                      "backgroundColor": "transparent",
                      "borderColor": "transparent",
                      "borderWidth": 0,
                      "borderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "padding": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowColor": "transparent",
                      "shadowBlur": 0,
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0
                  },
                  "nameGap": 15,
                  "axisLabel": {
                      "show": true,
                      "formatter": "{value} 单位",
                      "interval": 1,
                      "inside": false,
                      "rotate": 0,
                      "margin": 5,
                      "color": null,
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontFamily": "sans-serif",
                      "fontSize": 12,
                      "align": "right",
                      "verticalAlign": "middle",
                      "lineHeight": 56,
                      "textBorderColor": "transparent",
                      "textBorderWidth": 0,
                      "textShadowColor": "transparent",
                      "textShadowBlur": 0,
                      "textShadowOffsetX": 0,
                      "textShadowOffsetY": 0,
                      "backgroundColor": "transparent",
                      "borderColor": "transparent",
                      "borderWidth": 0,
                      "borderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "padding": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowColor": "transparent",
                      "shadowBlur": 0,
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0
                  },
                  "axisLine": {
                      "show": true,
                      "onZero": true,
                      "symbol": [
                          "none",
                          "none"
                      ],
                      "symbolSize": [
                          10,
                          15
                      ],
                      "symbolOffset": [
                          0,
                          0
                      ],
                      "lineStyle": {
                          "color": "#333",
                          "width": 1,
                          "type": "solid",
                          "shadowBlur": 0,
                          "shadowColor": "#ccc",
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0,
                          "opacity": 1
                      }
                  },
                  "axisTick": {
                      "show": false,
                      "inside": false,
                      "length": 5,
                      "lineStyle": {
                          "color": "#333",
                          "width": 1,
                          "type": "solid",
                          "shadowBlur": 0,
                          "shadowColor": "#ccc",
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0,
                          "opacity": 1
                      }
                  }
              }
          ],
          "series": [
              {
                  "type": "line",
                  "id": null,
                  "name": "折线图系列",
                  "coordinateSystem": "cartesian2d",
                  "xAxisIndex": 0,
                  "yAxisIndex": 0,
                  "polarIndex": 0,
                  "hoverAnimation": true,
                  "legendHoverLink": true,
                  "cursor": "pointer",
                  "connectNulls": false,
                  "clipOverflow": true,
                  "step": false,
                  "label": {
                      "show": false,
                      "position": "top",
                      "distance": 0,
                      "rotate": 0,
                      "offset": [
                          0,
                          0
                      ],
                      "formatter": "{a}{b}{c}",
                      "color": null,
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontFamily": "sans-serif",
                      "fontSize": 12,
                      "align": "center",
                      "verticalAlign": "auto",
                      "lineHeight": 15,
                      "textBorderColor": "transparent",
                      "textBorderWidth": 0,
                      "textShadowColor": "transparent",
                      "textShadowBlur": 0,
                      "textShadowOffsetX": 0,
                      "textShadowOffsetY": 0,
                      "backgroundColor": "transparent",
                      "borderColor": "transparent",
                      "borderWidth": 0,
                      "borderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "padding": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowColor": "transparent",
                      "shadowBlur": 0,
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0
                  },
                  "itemStyle": {
                      "color": null,
                      "borderColor": "#000",
                      "borderWidth": 0,
                      "borderType": "solid",
                      "barBorderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowBlur": 0,
                      "shadowColor": "#ccc",
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0,
                      "opacity": 1
                  },
                  "lineStyle": {
                      "color": null,
                      "width": 1,
                      "type": "solid",
                      "shadowBlur": 1,
                      "shadowColor": null,
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0,
                      "opacity": 1
                  },
                  "areaStyle": {
                      "color": null,
                      "origin": "auto",
                      "shadowBlur": 0,
                      "shadowColor": null,
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0,
                      "opacity": 0
                  },
                  "emphasis": {
                      "label": {
                          "show": false,
                          "position": "top",
                          "distance": 0,
                          "rotate": 0,
                          "offset": [
                              0,
                              0
                          ],
                          "formatter": "{a}{b}{c}",
                          "color": null,
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                          "fontFamily": "sans-serif",
                          "fontSize": 12,
                          "align": "center",
                          "verticalAlign": "auto",
                          "lineHeight": 15,
                          "textBorderColor": "transparent",
                          "textBorderWidth": 0,
                          "textShadowColor": "transparent",
                          "textShadowBlur": 0,
                          "textShadowOffsetX": 0,
                          "textShadowOffsetY": 0,
                          "backgroundColor": "transparent",
                          "borderColor": "transparent",
                          "borderWidth": 0,
                          "borderRadius": [
                              0,
                              0,
                              0,
                              0
                          ],
                          "padding": [
                              0,
                              0,
                              0,
                              0
                          ],
                          "shadowColor": "transparent",
                          "shadowBlur": 0,
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0
                      },
                      "itemStyle": {
                          "color": null,
                          "borderColor": "#000",
                          "borderWidth": 0,
                          "borderType": "solid",
                          "barBorderRadius": [
                              0,
                              0,
                              0,
                              0
                          ],
                          "shadowBlur": 0,
                          "shadowColor": "#ccc",
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0,
                          "opacity": 1
                      }
                  },
                  "smooth": false,
                  "data": [
                      10,
                      52,
                      200,
                      334,
                      390,
                      330,
                      220
                  ]
              }
          ]
      },
      "otherOption": {
          "dataObtainType": 0,
          "conditionSql": "",
          "dataSetId": null,
          "dimensionList": [],
          "measureList": [],
          "whereList": [],
          "selected": false,
          "refresh": 1653879545628,
          "showLoading": false
      },
      "i": 1653879545613,
      "initOption": {
          "width": 431,
          "height": 367
      },
      "moved": false
  },
  {
      "x": 18,
      "y": 13,
      "w": 15,
      "h": 15,
      "chartsType": 0,
      "title": "中国地图",
      "renderComponent": "render-china-map-charts",
      "configComponent": [
          {
              "name": "样式配置",
              "component": "style-china-map-charts",
              "icon": "fa-sliders"
          },
          {
              "name": "数据配置",
              "component": "data-china-map-charts",
              "icon": "fa-database"
          }
      ],
      "option": {
          "gridItemStyle": {
              "borderWidth": 0,
              "borderColor": null,
              "borderStyle": "solid",
              "borderRadius": [
                  0,
                  0,
                  0,
                  0
              ],
              "borderImageSource": null,
              "borderImageWidth": 0,
              "borderImageRepeat": "repeat",
              "backgroundColor": null,
              "shadowColor": null,
              "shadowBlur": 0,
              "shadowOffsetX": 0,
              "shadowOffsetY": 0,
              "shadowSpread": 0,
              "backgroundImage": null,
              "backgroundWidthSize": 100,
              "backgroundHeightSize": 100,
              "backgroundRepeat": "no-repeat"
          },
          "title": {
              "show": true,
              "left": "center",
              "top": "auto",
              "right": "auto",
              "bottom": "auto",
              "textVerticalAlign": "center",
              "triggerEvent": false,
              "itemGap": 10,
              "backgroundColor": "transparent",
              "padding": [
                  5,
                  5,
                  5,
                  5
              ],
              "borderColor": "#ccc",
              "borderWidth": 0,
              "borderRadius": [
                  0,
                  0,
                  0,
                  0
              ],
              "shadowBlur": 0,
              "shadowColor": "transparent",
              "shadowOffsetX": 0,
              "shadowOffsetY": 0,
              "text": "主标题",
              "link": "",
              "target": "blank",
              "textStyle": {
                  "color": "#333",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 18,
                  "lineHeight": 20,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              },
              "subtext": "副标题",
              "sublink": "",
              "subtarget": "self",
              "subtextStyle": {
                  "color": "#aaa",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 12,
                  "align": "center",
                  "verticalAlign": "center",
                  "lineHeight": 16,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              }
          },
          "toolbox": {
              "show": false,
              "orient": "horizontal",
              "itemSize": 15,
              "itemGap": 10,
              "showTitle": true,
              "feature": {
                  "dataView": {
                      "show": true,
                      "readOnly": false
                  },
                  "restore": {
                      "show": true
                  },
                  "magicType": {
                      "type": [
                          "line",
                          "bar"
                      ],
                      "show": true
                  },
                  "saveAsImage": {
                      "show": true
                  }
              }
          },
          "legend": {
              "show": true,
              "type": "scroll",
              "zlevel": 0,
              "left": "auto",
              "top": "auto",
              "right": "auto",
              "bottom": "auto",
              "width": "auto",
              "height": "auto",
              "orient": "vertical",
              "align": "auto",
              "padding": [
                  5,
                  5,
                  5,
                  5
              ],
              "itemGap": 10,
              "itemWidth": 25,
              "itemHeight": 14,
              "symbolKeepAspect": true,
              "formatter": "{name}",
              "selectedMode": true,
              "inactiveColor": "#ccc",
              "textStyle": {
                  "backgroundColor": "transparent",
                  "borderColor": "transparent",
                  "borderWidth": 0,
                  "borderRadius": [
                      0,
                      0,
                      0,
                      0
                  ],
                  "padding": [
                      0,
                      0,
                      0,
                      0
                  ],
                  "shadowColor": "transparent",
                  "shadowBlur": 0,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "lineHeight": 30,
                  "color": "#333",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 12,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              },
              "backgroundColor": "transparent",
              "borderColor": "#ccc",
              "borderWidth": 0,
              "borderRadius": [
                  0,
                  0,
                  0,
                  0
              ],
              "shadowBlur": 0,
              "shadowColor": "#ccc",
              "shadowOffsetX": 0,
              "shadowOffsetY": 0
          },
          "tooltip": {
              "show": true,
              "trigger": "axis",
              "showContent": true,
              "alwaysShowContent": false,
              "triggerOn": "mousemove|click",
              "showDelay": 0,
              "hideDelay": 100,
              "transitionDuration": 0.4,
              "formatter": "",
              "axisPointer": {
                  "type": "shadow"
              },
              "backgroundColor": "rgba(50,50,50,0.7)",
              "borderColor": "#333",
              "borderWidth": 0,
              "padding": [
                  5,
                  5,
                  5,
                  5
              ],
              "textStyle": {
                  "color": "#fff",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 14,
                  "lineHeight": 25,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              }
          },
          "textStyle": {
              "color": "#000",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontFamily": "sans-serif",
              "fontSize": 12,
              "lineHeight": 30,
              "textBorderColor": "transparent",
              "textBorderWidth": 0,
              "textShadowColor": "transparent",
              "textShadowBlur": 0,
              "textShadowOffsetX": 0,
              "textShadowOffsetY": 0
          },
          "backgroundColor": "transparent",
          "color": [
              "#4b7bec",
              "#45aaf2",
              "#fd9644",
              "#a55eea",
              "#fc5c65",
              "#2bcbba",
              "#26de81",
              "#fd79a8",
              "#f7b731",
              "#778ca3",
              "#b2bec3"
          ],
          "visualMap": {
              "show": true,
              "x": "left",
              "y": "center",
              "inRange": {
                  "color": [
                      "#313695",
                      "#4575b4",
                      "#74add1",
                      "#abd9e9",
                      "#e0f3f8",
                      "#ffffbf",
                      "#fee090",
                      "#fdae61",
                      "#f46d43",
                      "#d73027",
                      "#a50026"
                  ]
              },
              "color": [
                  "#5475f5",
                  "#9feaa5",
                  "#85daef",
                  "#74e2ca",
                  "#e6ac53",
                  "#9fb5ea"
              ]
          },
          "series": [
              {
                  "name": "中国地图",
                  "type": "map",
                  "roam": true,
                  "map": "china",
                  "itemStyle": {
                      "emphasis": {
                          "label": {
                              "show": true
                          },
                          "normal": {
                              "show": true
                          }
                      }
                  },
                  "data": [
                      {
                          "name": "北京",
                          "value": 143
                      },
                      {
                          "name": "广东",
                          "value": 143
                      },
                      {
                          "name": "上海",
                          "value": 143
                      },
                      {
                          "name": "广西",
                          "value": 143
                      },
                      {
                          "name": "福建",
                          "value": 143
                      },
                      {
                          "name": "江西",
                          "value": 143
                      }
                  ]
              }
          ]
      },
      "otherOption": {
          "dataObtainType": 0,
          "conditionSql": "",
          "dataSetId": null,
          "dimensionList": [],
          "measureList": [],
          "whereList": [],
          "selected": false,
          "refresh": 1653879555642,
          "showLoading": false
      },
      "i": 1653879555637,
      "initOption": {
          "width": 431,
          "height": 367
      },
      "moved": false
  },
  {
      "x": 17,
      "y": 28,
      "w": 15,
      "h": 15,
      "chartsType": 0,
      "title": "中国省地图",
      "renderComponent": "render-china-province-map-charts",
      "configComponent": [
          {
              "name": "样式配置",
              "component": "style-china-province-map-charts",
              "icon": "fa-sliders"
          },
          {
              "name": "数据配置",
              "component": "data-china-province-map-charts",
              "icon": "fa-database"
          }
      ],
      "option": {
          "gridItemStyle": {
              "borderWidth": 0,
              "borderColor": null,
              "borderStyle": "solid",
              "borderRadius": [
                  0,
                  0,
                  0,
                  0
              ],
              "borderImageSource": null,
              "borderImageWidth": 0,
              "borderImageRepeat": "repeat",
              "backgroundColor": null,
              "shadowColor": null,
              "shadowBlur": 0,
              "shadowOffsetX": 0,
              "shadowOffsetY": 0,
              "shadowSpread": 0,
              "backgroundImage": null,
              "backgroundWidthSize": 100,
              "backgroundHeightSize": 100,
              "backgroundRepeat": "no-repeat"
          },
          "title": {
              "show": true,
              "left": "center",
              "top": "auto",
              "right": "auto",
              "bottom": "auto",
              "textVerticalAlign": "center",
              "triggerEvent": false,
              "itemGap": 10,
              "backgroundColor": "transparent",
              "padding": [
                  5,
                  5,
                  5,
                  5
              ],
              "borderColor": "#ccc",
              "borderWidth": 0,
              "borderRadius": [
                  0,
                  0,
                  0,
                  0
              ],
              "shadowBlur": 0,
              "shadowColor": "transparent",
              "shadowOffsetX": 0,
              "shadowOffsetY": 0,
              "text": "主标题",
              "link": "",
              "target": "blank",
              "textStyle": {
                  "color": "#333",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 18,
                  "lineHeight": 20,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              },
              "subtext": "副标题",
              "sublink": "",
              "subtarget": "self",
              "subtextStyle": {
                  "color": "#aaa",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 12,
                  "align": "center",
                  "verticalAlign": "center",
                  "lineHeight": 16,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              }
          },
          "toolbox": {
              "show": false,
              "orient": "horizontal",
              "itemSize": 15,
              "itemGap": 10,
              "showTitle": true,
              "feature": {
                  "dataView": {
                      "show": true,
                      "readOnly": false
                  },
                  "restore": {
                      "show": true
                  },
                  "magicType": {
                      "type": [
                          "line",
                          "bar"
                      ],
                      "show": true
                  },
                  "saveAsImage": {
                      "show": true
                  }
              }
          },
          "legend": {
              "show": true,
              "type": "scroll",
              "zlevel": 0,
              "left": "auto",
              "top": "auto",
              "right": "auto",
              "bottom": "auto",
              "width": "auto",
              "height": "auto",
              "orient": "vertical",
              "align": "auto",
              "padding": [
                  5,
                  5,
                  5,
                  5
              ],
              "itemGap": 10,
              "itemWidth": 25,
              "itemHeight": 14,
              "symbolKeepAspect": true,
              "formatter": "{name}",
              "selectedMode": true,
              "inactiveColor": "#ccc",
              "textStyle": {
                  "backgroundColor": "transparent",
                  "borderColor": "transparent",
                  "borderWidth": 0,
                  "borderRadius": [
                      0,
                      0,
                      0,
                      0
                  ],
                  "padding": [
                      0,
                      0,
                      0,
                      0
                  ],
                  "shadowColor": "transparent",
                  "shadowBlur": 0,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "lineHeight": 30,
                  "color": "#333",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 12,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              },
              "backgroundColor": "transparent",
              "borderColor": "#ccc",
              "borderWidth": 0,
              "borderRadius": [
                  0,
                  0,
                  0,
                  0
              ],
              "shadowBlur": 0,
              "shadowColor": "#ccc",
              "shadowOffsetX": 0,
              "shadowOffsetY": 0
          },
          "tooltip": {
              "show": true,
              "trigger": "axis",
              "showContent": true,
              "alwaysShowContent": false,
              "triggerOn": "mousemove|click",
              "showDelay": 0,
              "hideDelay": 100,
              "transitionDuration": 0.4,
              "formatter": "",
              "axisPointer": {
                  "type": "shadow"
              },
              "backgroundColor": "rgba(50,50,50,0.7)",
              "borderColor": "#333",
              "borderWidth": 0,
              "padding": [
                  5,
                  5,
                  5,
                  5
              ],
              "textStyle": {
                  "color": "#fff",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 14,
                  "lineHeight": 25,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              }
          },
          "textStyle": {
              "color": "#000",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontFamily": "sans-serif",
              "fontSize": 12,
              "lineHeight": 30,
              "textBorderColor": "transparent",
              "textBorderWidth": 0,
              "textShadowColor": "transparent",
              "textShadowBlur": 0,
              "textShadowOffsetX": 0,
              "textShadowOffsetY": 0
          },
          "backgroundColor": "transparent",
          "color": [
              "#4b7bec",
              "#45aaf2",
              "#fd9644",
              "#a55eea",
              "#fc5c65",
              "#2bcbba",
              "#26de81",
              "#fd79a8",
              "#f7b731",
              "#778ca3",
              "#b2bec3"
          ],
          "series": [
              {
                  "name": "USA PopEstimates",
                  "type": "map",
                  "roam": true,
                  "map": "guangdong",
                  "itemStyle": {
                      "emphasis": {
                          "label": {
                              "show": true
                          }
                      }
                  },
                  "textFixed": {
                      "Alaska": [
                          20,
                          -20
                      ]
                  },
                  "data": []
              }
          ]
      },
      "i": 1653879562852,
      "otherOption": {
          "showLoading": false,
          "refresh": 1653879562858,
          "selected": false
      },
      "initOption": {
          "width": 431,
          "height": 367
      },
      "moved": false
  },
  {
      "x": 33,
      "y": 28,
      "w": 15,
      "h": 15,
      "chartsType": 0,
      "title": "简单散点图",
      "renderComponent": "render-simple-scatter-charts",
      "configComponent": [
          {
              "name": "样式配置",
              "component": "style-simple-scatter-charts",
              "icon": "fa-sliders"
          },
          {
              "name": "数据配置",
              "component": "data-simple-scatter-charts",
              "icon": "fa-database"
          }
      ],
      "option": {
          "gridItemStyle": {
              "borderWidth": 0,
              "borderColor": null,
              "borderStyle": "solid",
              "borderRadius": [
                  0,
                  0,
                  0,
                  0
              ],
              "borderImageSource": null,
              "borderImageWidth": 0,
              "borderImageRepeat": "repeat",
              "backgroundColor": null,
              "shadowColor": null,
              "shadowBlur": 0,
              "shadowOffsetX": 0,
              "shadowOffsetY": 0,
              "shadowSpread": 0,
              "backgroundImage": null,
              "backgroundWidthSize": 100,
              "backgroundHeightSize": 100,
              "backgroundRepeat": "no-repeat"
          },
          "title": {
              "show": true,
              "left": "center",
              "top": "auto",
              "right": "auto",
              "bottom": "auto",
              "textVerticalAlign": "center",
              "triggerEvent": false,
              "itemGap": 10,
              "backgroundColor": "transparent",
              "padding": [
                  5,
                  5,
                  5,
                  5
              ],
              "borderColor": "#ccc",
              "borderWidth": 0,
              "borderRadius": [
                  0,
                  0,
                  0,
                  0
              ],
              "shadowBlur": 0,
              "shadowColor": "transparent",
              "shadowOffsetX": 0,
              "shadowOffsetY": 0,
              "text": "简单散点图主标题",
              "link": "",
              "target": "blank",
              "textStyle": {
                  "color": "#333",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 18,
                  "lineHeight": 20,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              },
              "subtext": "简单散点图子标题",
              "sublink": "",
              "subtarget": "self",
              "subtextStyle": {
                  "color": "#aaa",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 12,
                  "align": "center",
                  "verticalAlign": "center",
                  "lineHeight": 16,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              }
          },
          "toolbox": {
              "show": false,
              "orient": "horizontal",
              "itemSize": 15,
              "itemGap": 10,
              "showTitle": true,
              "feature": {
                  "dataView": {
                      "show": true,
                      "readOnly": false
                  },
                  "restore": {
                      "show": true
                  },
                  "magicType": {
                      "type": [
                          "line",
                          "bar"
                      ],
                      "show": true
                  },
                  "saveAsImage": {
                      "show": true
                  }
              }
          },
          "legend": {
              "show": true,
              "type": "scroll",
              "zlevel": 0,
              "left": "auto",
              "top": "auto",
              "right": "auto",
              "bottom": "auto",
              "width": "auto",
              "height": "auto",
              "orient": "vertical",
              "align": "auto",
              "padding": [
                  5,
                  5,
                  5,
                  5
              ],
              "itemGap": 10,
              "itemWidth": 25,
              "itemHeight": 14,
              "symbolKeepAspect": true,
              "formatter": "{name}",
              "selectedMode": true,
              "inactiveColor": "#ccc",
              "textStyle": {
                  "backgroundColor": "transparent",
                  "borderColor": "transparent",
                  "borderWidth": 0,
                  "borderRadius": [
                      0,
                      0,
                      0,
                      0
                  ],
                  "padding": [
                      0,
                      0,
                      0,
                      0
                  ],
                  "shadowColor": "transparent",
                  "shadowBlur": 0,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "lineHeight": 30,
                  "color": "#333",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 12,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              },
              "backgroundColor": "transparent",
              "borderColor": "#ccc",
              "borderWidth": 0,
              "borderRadius": [
                  0,
                  0,
                  0,
                  0
              ],
              "shadowBlur": 0,
              "shadowColor": "#ccc",
              "shadowOffsetX": 0,
              "shadowOffsetY": 0
          },
          "tooltip": {
              "show": true,
              "trigger": "axis",
              "showContent": true,
              "alwaysShowContent": false,
              "triggerOn": "mousemove|click",
              "showDelay": 0,
              "hideDelay": 100,
              "transitionDuration": 0.4,
              "formatter": "",
              "axisPointer": {
                  "type": "shadow"
              },
              "backgroundColor": "rgba(50,50,50,0.7)",
              "borderColor": "#333",
              "borderWidth": 0,
              "padding": [
                  5,
                  5,
                  5,
                  5
              ],
              "textStyle": {
                  "color": "#fff",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontFamily": "sans-serif",
                  "fontSize": 14,
                  "lineHeight": 25,
                  "textBorderColor": "transparent",
                  "textBorderWidth": 0,
                  "textShadowColor": "transparent",
                  "textShadowBlur": 0,
                  "textShadowOffsetX": 0,
                  "textShadowOffsetY": 0
              }
          },
          "textStyle": {
              "color": "#000",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontFamily": "sans-serif",
              "fontSize": 12,
              "lineHeight": 30,
              "textBorderColor": "transparent",
              "textBorderWidth": 0,
              "textShadowColor": "transparent",
              "textShadowBlur": 0,
              "textShadowOffsetX": 0,
              "textShadowOffsetY": 0
          },
          "backgroundColor": "transparent",
          "color": [
              "#4b7bec",
              "#45aaf2",
              "#fd9644",
              "#a55eea",
              "#fc5c65",
              "#2bcbba",
              "#26de81",
              "#fd79a8",
              "#f7b731",
              "#778ca3",
              "#b2bec3"
          ],
          "grid": {
              "left": "3%",
              "right": "4%",
              "bottom": "3%",
              "containLabel": true
          },
          "xAxis": [
              {
                  "show": true,
                  "id": null,
                  "position": "bottom",
                  "offset": 0,
                  "type": "category",
                  "name": "",
                  "nameLocation": "end",
                  "nameTextStyle": {
                      "color": null,
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontFamily": "sans-serif",
                      "fontSize": 12,
                      "align": "auto",
                      "verticalAlign": "auto",
                      "lineHeight": 56,
                      "textBorderColor": "transparent",
                      "textBorderWidth": 0,
                      "textShadowColor": "transparent",
                      "textShadowBlur": 0,
                      "textShadowOffsetX": 0,
                      "textShadowOffsetY": 0,
                      "backgroundColor": "transparent",
                      "borderColor": "transparent",
                      "borderWidth": 0,
                      "borderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "padding": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowColor": "transparent",
                      "shadowBlur": 0,
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0
                  },
                  "boundaryGap": true,
                  "nameGap": 0,
                  "data": [
                      "Mon",
                      "Tue",
                      "Wed",
                      "Thu",
                      "Fri",
                      "Sat",
                      "Sun"
                  ],
                  "nameRotate": 0,
                  "inverse": false,
                  "axisLabel": {
                      "show": true,
                      "inside": false,
                      "rotate": 0,
                      "margin": 8,
                      "color": null,
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontFamily": "sans-serif",
                      "fontSize": 12,
                      "align": "auto",
                      "verticalAlign": "auto",
                      "lineHeight": 56,
                      "textBorderColor": "transparent",
                      "textBorderWidth": 0,
                      "textShadowColor": "transparent",
                      "textShadowBlur": 0,
                      "textShadowOffsetX": 0,
                      "textShadowOffsetY": 0,
                      "backgroundColor": "transparent",
                      "borderColor": "transparent",
                      "borderWidth": 0,
                      "borderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "padding": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowColor": "transparent",
                      "shadowBlur": 0,
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0
                  },
                  "axisLine": {
                      "show": true,
                      "onZero": true,
                      "symbol": [
                          "none",
                          "none"
                      ],
                      "symbolSize": [
                          10,
                          15
                      ],
                      "symbolOffset": [
                          0,
                          0
                      ],
                      "lineStyle": {
                          "color": "#333",
                          "width": 1,
                          "type": "solid",
                          "shadowBlur": 0,
                          "shadowColor": "#ccc",
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0,
                          "opacity": 1
                      }
                  },
                  "axisTick": {
                      "show": false,
                      "inside": false,
                      "length": 5,
                      "lineStyle": {
                          "color": "#333",
                          "width": 1,
                          "type": "solid",
                          "shadowBlur": 0,
                          "shadowColor": "#ccc",
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0,
                          "opacity": 1
                      }
                  }
              }
          ],
          "yAxis": [
              {
                  "id": null,
                  "show": true,
                  "position": "left",
                  "offset": 0,
                  "type": "value",
                  "name": "",
                  "nameLocation": "end",
                  "boundaryGap": true,
                  "nameTextStyle": {
                      "color": null,
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontFamily": "sans-serif",
                      "fontSize": 12,
                      "align": "auto",
                      "verticalAlign": "auto",
                      "lineHeight": 56,
                      "textBorderColor": "transparent",
                      "textBorderWidth": 0,
                      "textShadowColor": "transparent",
                      "textShadowBlur": 0,
                      "textShadowOffsetX": 0,
                      "textShadowOffsetY": 0,
                      "backgroundColor": "transparent",
                      "borderColor": "transparent",
                      "borderWidth": 0,
                      "borderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "padding": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowColor": "transparent",
                      "shadowBlur": 0,
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0
                  },
                  "nameGap": 15,
                  "axisLabel": {
                      "show": true,
                      "formatter": "{value} 单位",
                      "interval": 1,
                      "inside": false,
                      "rotate": 0,
                      "margin": 5,
                      "color": null,
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontFamily": "sans-serif",
                      "fontSize": 12,
                      "align": "right",
                      "verticalAlign": "middle",
                      "lineHeight": 56,
                      "textBorderColor": "transparent",
                      "textBorderWidth": 0,
                      "textShadowColor": "transparent",
                      "textShadowBlur": 0,
                      "textShadowOffsetX": 0,
                      "textShadowOffsetY": 0,
                      "backgroundColor": "transparent",
                      "borderColor": "transparent",
                      "borderWidth": 0,
                      "borderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "padding": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowColor": "transparent",
                      "shadowBlur": 0,
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0
                  },
                  "axisLine": {
                      "show": true,
                      "onZero": true,
                      "symbol": [
                          "none",
                          "none"
                      ],
                      "symbolSize": [
                          10,
                          15
                      ],
                      "symbolOffset": [
                          0,
                          0
                      ],
                      "lineStyle": {
                          "color": "#333",
                          "width": 1,
                          "type": "solid",
                          "shadowBlur": 0,
                          "shadowColor": "#ccc",
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0,
                          "opacity": 1
                      }
                  },
                  "axisTick": {
                      "show": false,
                      "inside": false,
                      "length": 5,
                      "lineStyle": {
                          "color": "#333",
                          "width": 1,
                          "type": "solid",
                          "shadowBlur": 0,
                          "shadowColor": "#ccc",
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0,
                          "opacity": 1
                      }
                  }
              }
          ],
          "series": [
              {
                  "id": null,
                  "type": "scatter",
                  "name": "散点图",
                  "coordinateSystem": "cartesian2d",
                  "xAxisIndex": 0,
                  "yAxisIndex": 0,
                  "polarIndex": 0,
                  "geoIndex": 0,
                  "hoverAnimation": true,
                  "legendHoverLink": true,
                  "cursor": "pointer",
                  "label": {
                      "show": false,
                      "position": "top",
                      "distance": 0,
                      "rotate": 0,
                      "offset": [
                          0,
                          0
                      ],
                      "formatter": "{a}{b}{c}",
                      "color": null,
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontFamily": "sans-serif",
                      "fontSize": 12,
                      "align": "center",
                      "verticalAlign": "auto",
                      "lineHeight": 15,
                      "textBorderColor": "transparent",
                      "textBorderWidth": 0,
                      "textShadowColor": "transparent",
                      "textShadowBlur": 0,
                      "textShadowOffsetX": 0,
                      "textShadowOffsetY": 0,
                      "backgroundColor": "transparent",
                      "borderColor": "transparent",
                      "borderWidth": 0,
                      "borderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "padding": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowColor": "transparent",
                      "shadowBlur": 0,
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0
                  },
                  "itemStyle": {
                      "color": null,
                      "borderColor": "#000",
                      "borderWidth": 0,
                      "borderType": "solid",
                      "barBorderRadius": [
                          0,
                          0,
                          0,
                          0
                      ],
                      "shadowBlur": 0,
                      "shadowColor": "#ccc",
                      "shadowOffsetX": 0,
                      "shadowOffsetY": 0,
                      "opacity": 1
                  },
                  "emphasis": {
                      "label": {
                          "show": false,
                          "position": "top",
                          "distance": 0,
                          "rotate": 0,
                          "offset": [
                              0,
                              0
                          ],
                          "formatter": "{a}{b}{c}",
                          "color": null,
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                          "fontFamily": "sans-serif",
                          "fontSize": 12,
                          "align": "center",
                          "verticalAlign": "auto",
                          "lineHeight": 15,
                          "textBorderColor": "transparent",
                          "textBorderWidth": 0,
                          "textShadowColor": "transparent",
                          "textShadowBlur": 0,
                          "textShadowOffsetX": 0,
                          "textShadowOffsetY": 0,
                          "backgroundColor": "transparent",
                          "borderColor": "transparent",
                          "borderWidth": 0,
                          "borderRadius": [
                              0,
                              0,
                              0,
                              0
                          ],
                          "padding": [
                              0,
                              0,
                              0,
                              0
                          ],
                          "shadowColor": "transparent",
                          "shadowBlur": 0,
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0
                      },
                      "itemStyle": {
                          "color": null,
                          "borderColor": "#000",
                          "borderWidth": 0,
                          "borderType": "solid",
                          "barBorderRadius": [
                              0,
                              0,
                              0,
                              0
                          ],
                          "shadowBlur": 0,
                          "shadowColor": "#ccc",
                          "shadowOffsetX": 0,
                          "shadowOffsetY": 0,
                          "opacity": 1
                      }
                  },
                  "data": [
                      10,
                      52,
                      200,
                      334,
                      390,
                      330,
                      220
                  ]
              }
          ]
      },
      "otherOption": {
          "dataObtainType": 0,
          "conditionSql": "",
          "dataSetId": null,
          "dimensionList": [],
          "measureList": [],
          "whereList": [],
          "selected": false,
          "refresh": 1653879570682,
          "showLoading": false
      },
      "i": 1653879570676,
      "initOption": {
          "width": 431,
          "height": 367
      },
      "moved": false
  },
  {
      "x": 1,
      "y": 33,
      "w": 15,
      "h": 15,
      "chartsType": 0,
      "title": "进度环",
      "renderComponent": "render-progress-circle",
      "configComponent": [
          {
              "name": "样式配置",
              "component": "style-progress-circle",
              "icon": "fa-sliders"
          },
          {
              "name": "数据配置",
              "component": "data-progress-circle",
              "icon": "fa-database"
          }
      ],
      "option": {
          "gridItemStyle": {
              "borderWidth": 0,
              "borderColor": null,
              "borderStyle": "solid",
              "borderRadius": [
                  0,
                  0,
                  0,
                  0
              ],
              "borderImageSource": null,
              "borderImageWidth": 0,
              "borderImageRepeat": "repeat",
              "backgroundColor": null,
              "shadowColor": null,
              "shadowBlur": 0,
              "shadowOffsetX": 0,
              "shadowOffsetY": 0,
              "shadowSpread": 0,
              "backgroundImage": null,
              "backgroundWidthSize": 100,
              "backgroundHeightSize": 100,
              "backgroundRepeat": "no-repeat"
          },
          "title": "<h1>进度环</h1><br>{value}",
          "strokeLinecap": "round",
          "strokeWidth": 6,
          "strokeColor": "#2db7f5",
          "dashboard": false,
          "trailWidth": 5,
          "trailColor": "#eaeef2",
          "value": 50,
          "target": 200
      },
      "otherOption": {
          "dataObtainType": 0,
          "conditionSql": "",
          "dataSetId": null,
          "dimensionList": [],
          "measureList": [],
          "whereList": [],
          "selected": false,
          "refresh": 1653879582415,
          "showLoading": false
      },
      "i": 1653879582411,
      "initOption": {
          "width": 431,
          "height": 367
      },
      "moved": false
  },
  {
      "x": 17,
      "y": 43,
      "w": 15,
      "h": 15,
      "chartsType": 0,
      "title": "进度条",
      "renderComponent": "render-progress-bar",
      "configComponent": [
          {
              "name": "样式配置",
              "component": "style-progress-bar",
              "icon": "fa-sliders"
          },
          {
              "name": "数据配置",
              "component": "data-progress-bar",
              "icon": "fa-database"
          }
      ],
      "option": {
          "gridItemStyle": {
              "borderWidth": 0,
              "borderColor": null,
              "borderStyle": "solid",
              "borderRadius": [
                  0,
                  0,
                  0,
                  0
              ],
              "borderImageSource": null,
              "borderImageWidth": 0,
              "borderImageRepeat": "repeat",
              "backgroundColor": null,
              "shadowColor": null,
              "shadowBlur": 0,
              "shadowOffsetX": 0,
              "shadowOffsetY": 0,
              "shadowSpread": 0,
              "backgroundImage": null,
              "backgroundWidthSize": 100,
              "backgroundHeightSize": 100,
              "backgroundRepeat": "no-repeat"
          },
          "title": "<h1>进度条</h1><br>",
          "value": 50,
          "target": 200,
          "status": "normal",
          "strokeWidth": 10,
          "strokeColor": [],
          "hideInfo": false,
          "vertical": false,
          "successPercent": 0
      },
      "otherOption": {
          "dataObtainType": 0,
          "conditionSql": "",
          "dataSetId": null,
          "dimensionList": [],
          "measureList": [],
          "whereList": [],
          "selected": false,
          "refresh": 1653879587040,
          "showLoading": false
      },
      "i": 1653879587035,
      "initOption": {
          "width": 431,
          "height": 367
      },
      "moved": false
  },
  {
      "x": 33,
      "y": 43,
      "w": 15,
      "h": 15,
      "chartsType": 0,
      "title": "进度环",
      "renderComponent": "render-progress-circle",
      "configComponent": [
          {
              "name": "样式配置",
              "component": "style-progress-circle",
              "icon": "fa-sliders"
          },
          {
              "name": "数据配置",
              "component": "data-progress-circle",
              "icon": "fa-database"
          }
      ],
      "option": {
          "gridItemStyle": {
              "borderWidth": 0,
              "borderColor": null,
              "borderStyle": "solid",
              "borderRadius": [
                  0,
                  0,
                  0,
                  0
              ],
              "borderImageSource": null,
              "borderImageWidth": 0,
              "borderImageRepeat": "repeat",
              "backgroundColor": null,
              "shadowColor": null,
              "shadowBlur": 0,
              "shadowOffsetX": 0,
              "shadowOffsetY": 0,
              "shadowSpread": 0,
              "backgroundImage": null,
              "backgroundWidthSize": 100,
              "backgroundHeightSize": 100,
              "backgroundRepeat": "no-repeat"
          },
          "title": "<h1>进度环</h1><br>{value}",
          "strokeLinecap": "round",
          "strokeWidth": 6,
          "strokeColor": "#2db7f5",
          "dashboard": false,
          "trailWidth": 5,
          "trailColor": "#eaeef2",
          "value": 50,
          "target": 200
      },
      "otherOption": {
          "dataObtainType": 0,
          "conditionSql": "",
          "dataSetId": null,
          "dimensionList": [],
          "measureList": [],
          "whereList": [],
          "selected": false,
          "refresh": 1653879591624,
          "showLoading": false
      },
      "i": 1653879591619,
      "initOption": {
          "width": 431,
          "height": 367
      },
      "moved": false
  }
];
