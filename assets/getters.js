// import axios from 'axios'
import latest1 from '@/static/images/latest/latest-1.png'
import latest2 from '@/static/images/latest/latest-2.png'

import member1 from '@/static/images/members/CETC.jpg'
import member2 from '@/static/images/members/CASC.png'
import member3 from '@/static/images/members/China Telecom.jpg'
import member4 from '@/static/images/members/Hualu.png'
import member5 from '@/static/images/members/China Mobile.jpg'
import member6 from '@/static/images/members/China Unicom.png'
import member7 from '@/static/images/members/Tsinghua Tongfang.jpg'
import member8 from '@/static/images/members/Beihang University.jpg'

export const latestGetter = function() {
  return [
    {
      imgSrc: latest1,
      title: '阻碍智慧城市发展的因素是什么？',
      content: '在未来的智慧城市中，城市基础设施将相互连接。联网的设备无处不在，从公共汽车，汽车到路灯，都通过物联网（IoT）链接到网络。水和电网将配备智能传感器。所有这些都应使我们的城市空间更高效，更便捷，污染更少，更安全，更宜居。'
    }, {
      imgSrc: latest1,
      title: '物联网在智能交通的发展势头强劲',
      content: '在新基建的浪潮下，交通被认为是物联网所有应用场景中具有前景的应用之一。目前，智能交通系统在许多城市已经开始规模化应用，物联网将会进一步得到释放，市场前景广阔，产业规模有望达2万亿元。随着技术的不断发展，物联网在智能交通领域的应用也将继续深入。'
    }, {
      imgSrc: latest1,
      title: '传感器已成为物联网的重要切入点',
      content: '物联网要想走得更远，取决于传感器的发展程度。无论是从信息测量、分析到机器之间的控制，都依赖传感器来收集信息。无论谁想在物联网乃至工业物联网中占有一席之地，传感器都是最合适的切入点。'
    }, {
      imgSrc: latest2,
      title: '阻碍智慧城市发展的因素是什么？',
      content: '在未来的智慧城市中，城市基础设施将相互连接。联网的设备无处不在，从公共汽车，汽车到路灯，都通过物联网（IoT）链接到网络。水和电网将配备智能传感器。所有这些都应使我们的城市空间更高效，更便捷，污染更少，更安全，更宜居。'
    }, {
      imgSrc: latest2,
      title: '物联网在智能交通的发展势头强劲',
      content: '在新基建的浪潮下，交通被认为是物联网所有应用场景中具有前景的应用之一。目前，智能交通系统在许多城市已经开始规模化应用，物联网将会进一步得到释放，市场前景广阔，产业规模有望达2万亿元。随着技术的不断发展，物联网在智能交通领域的应用也将继续深入。'
    }, {
      imgSrc: latest2,
      title: '传感器已成为物联网的重要切入点',
      content: '物联网要想走得更远，取决于传感器的发展程度。无论是从信息测量、分析到机器之间的控制，都依赖传感器来收集信息。无论谁想在物联网乃至工业物联网中占有一席之地，传感器都是最合适的切入点。'
    }
  ]
}

export const memberGetter = function() {
  return [
    {
      imgSrc: member1,
      title: '中国电科'
    }, {
      imgSrc: member2,
      title: '航天科技'
    }, {
      imgSrc: member3,
      title: '中国电信'
    }, {
      imgSrc: member4,
      title: '华录集团'
    }, {
      imgSrc: member5,
      title: '中国移动'
    }, {
      imgSrc: member6,
      title: '中国联通'
    }, {
      imgSrc: member7,
      title: '清华同方'
    }, {
      imgSrc: member8,
      title: '北京航空航天大学'
    }
  ]
}

export const allMemberGetter = function() {
  return {
    tier1: {
      title: '理事长',
      list: [
        {
          index: 1,
          name: '中国电子科技集团公司'
        }
      ]
    },
    tier2: {
      title: '副理事长',
      list: [
        {
          index: 2,
          name: '中国航天科技集团公司'
        }, {
          index: 3,
          name: '大唐电信科技产业集团'
        }, {
          index: 4,
          name: '福建新大陆电脑股份有限公司'
        }, {
          index: 5,
          name: '中国华录集团有限公司'
        }, {
          index: 6,
          name: '上海物联网有限公司'
        }, {
          index: 7,
          name: '广东物联天下科技集团股份有限公司'
        }, {
          index: 8,
          name: '闪联信息技术工程中心有限公司'
        }, {
          index: 9,
          name: '中国联合网络通信有限公司'
        }, {
          index: 10,
          name: '中国电信集团公司'
        }, {
          index: 11,
          name: '中国移动通信集团公司'
        }, {
          index: 12,
          name: '工业和信息化部电信研究院通信标准研究所'
        }, {
          index: 13,
          name: '总后后勤学院研究所'
        }, {
          index: 14,
          name: '公安部第一研究所'
        }, {
          index: 15,
          name: '公安部第三研究所'
        }, {
          index: 16,
          name: '中国地质调查局水文地质环境地质调查中心'
        }, {
          index: 17,
          name: '中国科学院物联网研究发展中心'
        }, {
          index: 18,
          name: '工业和信息化部电子工业标准化研究院'
        }, {
          index: 19,
          name: '中国物品编码中心'
        }, {
          index: 20,
          name: '北京航空航天大学'
        }, {
          index: 21,
          name: '东南大学科研院'
        }, {
          index: 22,
          name: '南京邮电大学'
        }, {
          index: 23,
          name: '解放军理工大学'
        }, {
          index: 24,
          name: '中关村物联网产业联盟'
        }, {
          index: 25,
          name: '中国智慧城市产业技术创新战略联盟'
        }, {
          index: 26,
          name: '无锡“感知中国”物联网联盟'
        }
      ]
    },
    tier3: {
      title: '理事',
      list: [
        {
          index: 27,
          name: '北京联众合为科技发展有限公司'
        }, {
          index: 28,
          name: '北京时代凌宇科技有限公司'
        }, {
          index: 29,
          name: '同方股份有限公司'
        }, {
          index: 30,
          name: '中电海康集团有限公司'
        }, {
          index: 31,
          name: '安徽四创电子股份有限公司'
        }, {
          index: 32,
          name: '利尔达科技集团股份有限公司'
        }, {
          index: 33,
          name: '方正国际软件有限公司'
        }, {
          index: 34,
          name: '万达信息股份有限公司'
        }, {
          index: 35,
          name: '武汉邮电科学研究院'
        }, {
          index: 36,
          name: '公安部交通管理科学研究所'
        }, {
          index: 37,
          name: '中国地质环境监测院地质灾害应急技术指导中心'
        }, {
          index: 38,
          name: '中国国际电子商务中心'
        }, {
          index: 39,
          name: '北京千方科技集团有限公司'
        }, {
          index: 40,
          name: '清华大学'
        }
      ]
    }
  }
}
