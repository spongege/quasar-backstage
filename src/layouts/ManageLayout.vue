<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          中台
        </q-toolbar-title>
        <q-btn-dropdown flat no-caps stretch auto-close>
          <template v-slot:label>
            <q-icon name="account_circle" />
            <div class="q-ml-md">John</div>
          </template>
          <div class="row no-wrap flex-center q-pa-md">
            <div class="column items-center">
              <q-btn color="primary" label="登出" push size="sm" v-close-popup @click="logout" />
            </div>
          </div>
        </q-btn-dropdown>
        <q-separator vertical inset class="q-mx-md" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :width="250"
      show-if-above
      bordered
      elevated
      content-class="bg-grey-1"
    >
      <q-list class="rounded-borders" bordered>
        <q-item-label header class="text-grey-8">
          菜单栏
        </q-item-label>
        <q-expansion-item
          class="text-weight-bold"
          v-for="(item, index) in menuList"
          :key="index"
          icon="assignment"
          :label="item.title"
          :default-opened="+activeIndex.split('-')[0] === index"
          header-class="text-primary"
        >
          <q-item
            class="text-weight-regular"
            v-for="(link, idx) in item.children"
            clickable
            exact
            :key="idx"
            v-ripple:blue-8
            @click="activeIndex = `${index}-${idx}`"
            :active="activeIndex === `${index}-${idx}`"
            active-class="bg-light-blue-2 text-grey-10"
          >
            <q-item-section>
              <q-item-label class="q-pl-llg">{{ link.title }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
const menuList = [
  {
    title: '菜单1',
    caption: 'quasar.dev',
    children: [
      {
        title: '菜单1-1'
      },
      {
        title: '菜单1-2'
      },
      {
        title: '菜单1-3'
      }
    ]
  },
  {
    title: '菜单2',
    caption: 'github.com/quasarframework',
    children: [
      {
        title: '菜单2-1'
      },
      {
        title: '菜单2-2'
      },
      {
        title: '菜单2-3'
      }
    ]
  },
  {
    title: '菜单3',
    caption: 'forum.quasar.dev',
    children: [
      {
        title: '菜单3-1'
      },
      {
        title: '菜单3-2'
      },
      {
        title: '菜单3-3'
      }
    ]
  },
  {
    title: '菜单4',
    caption: '@quasarframework',
    children: [
      {
        title: '菜单4-1'
      },
      {
        title: '菜单4-2'
      },
      {
        title: '菜单4-3'
      }
    ]
  },
  {
    title: '菜单5',
    caption: '@quasarframework',
    children: [
      {
        title: '菜单5-1'
      },
      {
        title: '菜单5-2'
      },
      {
        title: '菜单5-3'
      }
    ]
  }
]

export default {
  name: 'MainLayout',
  data: () => ({
    leftDrawerOpen: false,
    menuList,
    activeIndex: '0-0'
  }),
  methods: {
    logout() {
      this.$q
        .dialog({
          title: '确认',
          message: '你想登出账户吗?',
          cancel: true,
          persistent: true,
          transitionShow: 'flip-down',
          transitionHide: 'flip-up'
        })
        .onOk(() => {
          this.$router.push('/')
        })
        .onCancel(() => {
          console.log('>>>> Cancel')
        })
        .onDismiss(() => {
          console.log('I am triggered on both OK and Cancel')
        })
    }
  }
}
</script>
<style lang="scss">
.q-pl-llg {
  padding-left: 60px;
}
</style>
