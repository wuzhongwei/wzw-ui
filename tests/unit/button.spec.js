import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Button from '@/packages/button.vue'
import Icon from '@/packages/icon.vue'

describe('button.vue', () => {
  it('1.测试button能否正常显示slot里的内容', () => {
    const wrapper= shallowMount(Button, {
      slots: {
        default: 'wzw-ui'
      }
    })
    expect(wrapper.text()).to.eq('wzw-ui')
  })
  it('2.测试icon传入是否正常', () => {
    const wrapper= shallowMount(Button, {
      stubs: { // 替换icon组件
        'wzw-icon': Icon
      },
      propsData: {
        icon: 'pan_icon'
      }
    })
    // console.log(wrapper.vm.$el)
    expect(wrapper.find('i').attributes('class')).to.contains('wzw-icon-pan_icon')
  })
  it('3.测试loading时按钮是否禁用状态', () => {
    const wrapper= shallowMount(Button, {
      stubs: {
        'wzw-icon': Icon
      },
      propsData: {
        loading: true
      }
    })
    expect(wrapper.find('button').attributes('class')).to.contains('is-loading')
    // console.log(wrapper.find('button'))
    expect(wrapper.find('button').attributes('disabled')).to.eq('disabled')
  })
  it('4.测试按钮能否正常点击', () => {
    const wrapper= shallowMount(Button, {
      //测试事件可以不用传wzw-icon组件
      // stubs: ['wzw-icon'], // 占位
    })
    wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click').length).to.eq(1) // 查看点击个数
  })
  it('5.按钮传入position是否正常显示', () => {
    const wrapper= shallowMount(Button, {
      attachToDocument: true, // 将组件挂载到浏览器上 否则会报错
      stubs: {
        'wzw-icon': Icon
      },
      slots: {
        default: '测试内容1'
      },
      propsData: {
        iconPosition: 'left',
        icon: 'left'
      }
    })
    let ele = wrapper.vm.$el.querySelector('span')
    expect(getComputedStyle(ele).order).to.eq('2')
    wrapper.setProps({
      iconPosition: 'right'
    })
    return wrapper.vm.$nextTick().then(() => {
      expect(getComputedStyle(ele).order).to.eq('1')
    })
  })
})