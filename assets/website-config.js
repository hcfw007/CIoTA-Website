const menuStructure = {
  name: 'root',
  title: '首页',
  addr: 'index',
  children: [
    {
      name: 'intro',
      title: '联盟介绍',
      addr: 'intro',
      children: [
        {
          name: 'alliance-intro',
          title: '联盟简介',
          addr: 'alliance-intro'
        }, {
          name: 'alliance-member',
          title: '联盟成员',
          addr: 'alliance-member'
        }, {
          name: 'alliance-goal',
          title: '宗旨理念',
          addr: 'alliance-goal'
        }
      ]
    }, {
      name: 'conferences',
      title: '物联大会',
      addr: 'conferences',
      children: [
        {
          name: 'past-conferences',
          title: '往届回顾',
          addr: 'past-conferences'
        }
      ]
    }, {
      name: 'info',
      title: '资讯中心',
      addr: 'info',
      children: [
        {
          name: 'latest',
          title: '最新资讯',
          addr: 'latest'
        }, {
          name: 'trends',
          title: '联盟动态',
          addr: 'trends'
        }, {
          name: 'projects',
          title: '相关项目',
          addr: 'projects'
        }
      ]
    }, {
      name: 'members',
      title: '会员中心',
      addr: 'members',
      children: [
        {
          name: 'member-list',
          title: '会员展示',
          addr: 'member-list'
        }, {
          name: 'how-to-apply',
          title: '注册指引',
          addr: 'how-to-apply'
        }
      ]
    }, {
      name: 'contact',
      title: '联系我们',
      addr: 'contact'
    }
  ]
}

export {
  menuStructure
}
