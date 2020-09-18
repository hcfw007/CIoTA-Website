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
      id: 1,
      imgSrc: latest1,
      title: '阻碍智慧城市发展的因素是什么？',
      abstract: '在未来的智慧城市中，城市基础设施将相互连接。联网的设备无处不在，从公共汽车，汽车到路灯，都通过物联网（IoT）链接到网络。水和电网将配备智能传感器。所有这些都应使我们的城市空间更高效，更便捷，污染更少，更安全，更宜居。'
    }, {
      id: 2,
      imgSrc: latest1,
      title: '物联网在智能交通的发展势头强劲',
      abstract: '在新基建的浪潮下，交通被认为是物联网所有应用场景中具有前景的应用之一。目前，智能交通系统在许多城市已经开始规模化应用，物联网将会进一步得到释放，市场前景广阔，产业规模有望达2万亿元。随着技术的不断发展，物联网在智能交通领域的应用也将继续深入。'
    }, {
      id: 3,
      imgSrc: latest1,
      title: '传感器已成为物联网的重要切入点',
      abstract: '物联网要想走得更远，取决于传感器的发展程度。无论是从信息测量、分析到机器之间的控制，都依赖传感器来收集信息。无论谁想在物联网乃至工业物联网中占有一席之地，传感器都是最合适的切入点。'
    }, {
      id: 4,
      imgSrc: latest2,
      title: '阻碍智慧城市发展的因素是什么？',
      abstract: '在未来的智慧城市中，城市基础设施将相互连接。联网的设备无处不在，从公共汽车，汽车到路灯，都通过物联网（IoT）链接到网络。水和电网将配备智能传感器。所有这些都应使我们的城市空间更高效，更便捷，污染更少，更安全，更宜居。'
    }, {
      id: 5,
      imgSrc: latest2,
      title: '物联网在智能交通的发展势头强劲',
      abstract: '在新基建的浪潮下，交通被认为是物联网所有应用场景中具有前景的应用之一。目前，智能交通系统在许多城市已经开始规模化应用，物联网将会进一步得到释放，市场前景广阔，产业规模有望达2万亿元。随着技术的不断发展，物联网在智能交通领域的应用也将继续深入。'
    }, {
      id: 6,
      imgSrc: latest2,
      title: '传感器已成为物联网的重要切入点',
      abstract: '物联网要想走得更远，取决于传感器的发展程度。无论是从信息测量、分析到机器之间的控制，都依赖传感器来收集信息。无论谁想在物联网乃至工业物联网中占有一席之地，传感器都是最合适的切入点。'
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

const latestDetail = [
  {
    id: 1,
    title: '阻碍智慧城市发展的因素是什么？',
    content: `<p>在未来的智慧城市中，城市基础设施将相互连接。联网的设备无处不在，从公共汽车，汽车到路灯，都通过物联网（IoT）链接到网络。水和电网将配备智能传感器。所有这些都应使我们的城市空间更高效，更便捷，污染更少，更安全，更宜居。</p>
<img src="/images/news-img/p1.png" alt="">
<p>智慧城市是指使用信息和通信技术（ICT）框架来改善城市管理并鼓励经济增长的城市。ICT与连接的对象网络（IoT）进行交互，它可以接收，分析和传输有关当前状况和事件的数据。</p>
<p>物联网包括可用于使城市更高效或更易访问的任何设备，包括蜂窝电话，智能车辆，安全摄像机，嵌入在道路中的传感器等。</p>
<p>智慧城市的三个主要特征是：物理和技术基础设施，环境监测和响应能力以及为公民提供的智慧服务。</p>
<p>一个智慧的城市由三个层次构成。首先是技术基础，其中包括大量的智能手机和通过高速通信网络连接的传感器。第二层由特定应用程序组成。将原始数据转换为警报，见解和行动需要正确的工具，这就是技术提供商和应用程序开发人员介入的地方。第三层是城市，公司和公众的使用情况。许多应用程序只有在被广泛采用并设法改变行为的情况下才能成功。他们鼓励人们在下班时间使用公共交通，改变路线，减少能源和水的消耗并在一天中的不同时间使用，并通过预防性自我保健减少医疗保健系统的压力等。</p>
<p>在智慧城市中，传感器，摄像头，无线设备，数据中心的网络构成了关键的基础架构，使市民能够以更快，更有效的方式提供基本服务。</p>
<p>当中，传感是智能基础架构的核心。传感器是城市景观中隐藏但无处不在的组成部分，是任何智能控制系统的重要组成部分。</p>
<p>Frost＆Sullivan的最新分析显示，新兴传感器技术将颠覆未来智慧城市。数字化和物联网（IoT）的进步正在推动传感器技术在城市之间的大规模采用，再结合人工智能（AI）和5G高速网络等关键支持技术，城市中的集成传感器网络正在推动建立互联城市生态系统，以实现公共资源的最佳利用。</p>
<p>当中，未来智慧城市主要利用四大传感器技术来扩展其智慧功能——电子传感器、红外传感器、热传感器以及接近传感器&激光雷达传感器。</p>
<p>①、电子传感器：</p>
<p>电子传感器部署在环境监视传感器和速度计传感器中，这些传感器通常用于智慧城市中，以执行各种任务，例如监视电源和电流水平以进行故障检测。</p>
<p>②、红外传感器：</p>
<p>红外传感器有助于在动态和不稳定的环境中无偏见地生成数据，从而有助于智慧城市中的决策。雷达传感器可用于利用复杂的计算机数据来分析重要的考古现场信息。</p>
<p>③、热传感器：</p>
<p>热传感器对能量分布进行精确跟踪，而其他智能传感器则可以管理需求侧能量。因此，智能电网传感器有助于提高能源效率。</p>
<p>④、接近传感器和激光雷达传感器：</p>
<p>接近传感器和激光雷达传感器可以帮助开发自动车辆系统，这对于使城市完全智能化至关重要。</p>
<p>智慧城市创新无处不在，几乎每个大城市都至少采用了一些智慧城市属性。但是，并非所有城市都会成为智慧城市。成功的智慧城市项目需要多年的坚定努力，包括与公共和私营部门的合作，以及公民的密切参与，以确保他们对智慧项目的支持和使用。</p>
<p>阻碍智慧城市的不是技术，而是人。</p>
<p>智慧城市技术的存在，被广泛部署和迅速发展，有成千上万的成功项目可供学习，以克服技术和后勤方面的挑战并使项目取得成功。</p>
<p>归根结底，智慧城市项目的核心在人的方面兴衰。坚定的领导能力，有效的政策决策以及所有利益相关者之间有意义的合作，以驱动一座城市走向成功。技术，砖块和道路都会紧随其后。</p>
    `
  }, {
    id: 2,
    title: '物联网在智能交通的发展势头强劲',
    content: `<p>在新基建的浪潮下，交通被认为是物联网所有应用场景中具有前景的应用之一。目前，智能交通系统在许多城市已经开始规模化应用，物联网将会进一步得到释放，市场前景广阔，产业规模有望达2万亿元。随着技术的不断发展，物联网在智能交通领域的应用也将继续深入。</p>
<p>物联网作为新一代信息技术的重要组成部分，通过射频识别，全球定位系统等信息感应设备，按照约定的协议，把任何物体与互联网相连，进行信息交换和通信。随着物联网技术的不断发展，也为智能交通系统的进一步发展和完善注入了新的动力。</p>
<p>视频监控与采集技术可以实现将视频图像和模式识别相结合，此技术为更好地解决交通问题打下了基础。视频检测系统将视频采集设备采集到的连续模拟图像转换成离散的数字图像后，经分析处理得到车辆牌号码、车型等信息，能够计算出交通流量、车速、车头时距、占有率等交通参数。</p>
<p>GPS技术是很多车内导航系统的核心技术，车辆中配备的嵌入式GPS接收器能够接收多个不同卫星的信号并计算出车辆当前所在的位置。随着技术的进一步提升，定位的误差也越来越小。</p>
<img src="/images/news-img/p2.png" alt="">
<p>近些年随着物联网技术的发展，交通也越来越智能化、交通基础设施发挥的效能越来越大，人、车、交通基础设施之间都将实现联接。</p>
<p>车联是物联网发展重点，以车联网为例，2025年5G联网车辆将超过6千万，100%新车都将连接网络，车联网市场空间无可估量。</p>
<p>联接能力提升让车联应用从车载娱乐升级到无人驾驶、车队编排与管理、交通智能服务。车联网市场潜力释放的同时，交通成本也将大幅下降，传统智能交通行业将涌现更多转型机会。</p>
<p>安全运输环境建立在从一系列传感器和数据库收集的信息以及视频数据和分析数据的基础上。面部识别、行为分析、车牌识别和其他智能解决方案都变得越来越普遍，这意味着实时有效地收集、分析、存储和处理所有这些信息对于实现安全和操作目标至关重要。</p>
<p>尽管大多数运输当局依靠视频、安全和物联网平台来更好地保护和优化其运营和乘客，但是这些解决方案通常分散、不连贯、容易出现故障且维护成本高。随着数据量和收集量的扩大，传统的IT基础架构无法满足这些环境的需求。</p>
<p>除了有效地监视，存储，保护，处理和移动来自成千上万个摄像机和传感器的数据外，运输机构的IT基础架构解决方案还必须与现有和新的IoT技术无缝集成，使用物联网和视频分析可确保安全需要技术的帮助。</p>`
  }, {
    id: 3,
    title: '传感器已成为物联网的重要切入点',
    content: `<p>物联网要想走得更远，取决于传感器的发展程度。无论是从信息测量、分析到机器之间的控制，都依赖传感器来收集信息。无论谁想在物联网乃至工业物联网中占有一席之地，传感器都是最合适的切入点。</p>
<p>如果没有传感器来检测重要的生产数据，如压力、位置和温度，工业物联网就不会发展到今天。基本上，工业物联网和消费物联网的增长伴随着传感器市场的扩大，传感器技术的创新和研发将刺激物联网产业的潜力和发展。</p>
<img src="/images/news-img/p3.png" alt="">
<p>此外，工采网了解到传感器在自动化行业中使用的比例越来越高，如联网汽车和自驾汽车，对传感器的需求很大，占传感器市场的21％；医疗行业对传感器的需求也在增加，他们依靠传感器来监测病人的健康状况并进行医疗诊断，目前这一市场占传感器市场的12％。</p>
<p>工业应用通常侧重于生产高端产品，而不是大批量生产，因此在恶劣的工作环境中，对传感器的需求往往是可靠、精确和小型的设备。在自动化过程领域，诸如过程控制、过程安全、作业管理和资产利用等系统都需要传感器来精确测量、分析和控制系统设置。</p>
<p>现在，为了把握这一趋势，美国、英国和欧洲的企业正积极与技术公司合作，收购专门从事实时数据管理、资产管理和传感器设备的公司。企业间的并购在传感器市场形成了一股旋风，仅仅是因为它不受某些进入壁垒的限制。传统传感器公司也乐于与新工业区的企业合作，技术制造商也加入了传感器之战。</p>
<img src="/images/news-img/p4.png" alt="">
<p>传感器市场的这种并购趋势将引领我们走向一个更加互联和自动化的世界。在几个主要行业，如制造业，随着自动化程度的提高，传感器的使用将变得更加普及。如此高的市场需求和无限的商机将吸引更多的人加入市场。</p>
<p>不管是“工业4．0”还是“中国制造2025”，事实上，最本质的变化是智能生产，在工采网看了传感器是整个智能的关键。因为“工业4．0”和“中国制造2025”的核心是智能制造，不管是网络化还是数字化，前端都将是智能化的，但所有这些都离不开传感器。ISweek工采网汇集了来自世界各地的高质量工业技术传感器产品，致力于为工业技术产品的全球买家、供应商、贸易商和制造商提供整个产业链的一站式产品销售和采购服务。</p>`
  }
]

export const latestDetailGetter = function(id) {
  if (id > 3) {
    id -= 3
  }
  return latestDetail[id - 1]
}
