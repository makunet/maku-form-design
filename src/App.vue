<template>
	<DesignForm />
</template>

<!--<template>-->
<!--	<GenerateForm :data="data" :value="value" />-->
<!--</template>-->
<script lang="ts" setup>
import { reactive, provide } from 'vue'
const data = reactive({
	list: [
		{
			type: 'grid',
			label: '格栅布局',
			columns: [
				{
					span: 12,
					list: [
						{
							type: 'checkbox',
							label: '多选框组',
							options: {
								defaultValue: [],
								button: false,
								labelHide: false,
								disabled: false,
								options: [
									{
										label: '标签1',
										value: 'value1'
									},
									{
										label: '标签2',
										value: 'value2'
									},
									{
										label: '标签3',
										value: 'value3'
									}
								],
								optionsType: 'dict',
								requestUrl: '',
								dictName: 'role_data_scope',
								props: {
									value: 'dictValue',
									label: 'dictLabel'
								},
								rules: []
							},
							name: 'checkbox_vb9ypx'
						}
					]
				},
				{
					span: 12,
					list: []
				}
			],
			options: {
				gutter: 0,
				justify: 'start',
				align: 'top'
			},
			name: 'grid_w33gu7'
		}
	],
	config: {
		size: 'default',
		labelWidth: 100,
		labelPosition: 'right',
		style: ''
	}
})

const value = reactive({})

const dictList = [
	{
		dictType: 'post_status',
		dataList: [
			{ dictLabel: '正常', dictValue: '1', labelClass: 'primary' },
			{ dictLabel: '停用', dictValue: '0', labelClass: 'danger' }
		]
	},
	{
		dictType: 'user_gender',
		dataList: [
			{ dictLabel: '男', dictValue: '0', labelClass: 'primary' },
			{ dictLabel: '女', dictValue: '1', labelClass: 'success' },
			{ dictLabel: '未知', dictValue: '2', labelClass: 'warning' }
		]
	},
	{
		dictType: 'user_status',
		dataList: [
			{ dictLabel: '正常', dictValue: '1', labelClass: 'primary' },
			{ dictLabel: '停用', dictValue: '0', labelClass: 'danger' }
		]
	},
	{
		dictType: 'role_data_scope',
		dataList: [
			{ dictLabel: '自定义数据', dictValue: '4', labelClass: '' },
			{ dictLabel: '本机构数据', dictValue: '2', labelClass: '' },
			{ dictLabel: '全部数据', dictValue: '0', labelClass: '' },
			{ dictLabel: '本机构及子机构数据', dictValue: '1', labelClass: '' },
			{ dictLabel: '本人数据', dictValue: '3', labelClass: '' }
		]
	},
	{
		dictType: 'enable_disable',
		dataList: [
			{ dictLabel: '启用', dictValue: '1', labelClass: 'primary' },
			{ dictLabel: '禁用', dictValue: '0', labelClass: 'danger' }
		]
	},
	{
		dictType: 'success_fail',
		dataList: [
			{ dictLabel: '成功', dictValue: '1', labelClass: 'primary' },
			{ dictLabel: '失败', dictValue: '0', labelClass: 'danger' }
		]
	},
	{
		dictType: 'login_operation',
		dataList: [
			{ dictLabel: '登录成功', dictValue: '0', labelClass: 'primary' },
			{ dictLabel: '退出成功', dictValue: '1', labelClass: 'primary' },
			{ dictLabel: '验证码错误', dictValue: '2', labelClass: 'warning' },
			{ dictLabel: '账号密码错误', dictValue: '3', labelClass: 'danger' }
		]
	},
	{
		dictType: 'params_type',
		dataList: [
			{ dictLabel: '是', dictValue: '1', labelClass: 'danger' },
			{ dictLabel: '否', dictValue: '0', labelClass: 'primary' }
		]
	},
	{
		dictType: 'user_super_admin',
		dataList: [
			{ dictLabel: '否', dictValue: '0', labelClass: 'primary' },
			{ dictLabel: '是', dictValue: '1', labelClass: 'danger' }
		]
	},
	{
		dictType: 'schedule_group',
		dataList: [
			{ dictLabel: '默认', dictValue: 'default', labelClass: '' },
			{ dictLabel: '系统', dictValue: 'system', labelClass: '' }
		]
	},
	{
		dictType: 'schedule_status',
		dataList: [
			{ dictLabel: '暂停', dictValue: '0', labelClass: 'danger' },
			{ dictLabel: '正常', dictValue: '1', labelClass: 'primary' }
		]
	},
	{
		dictType: 'sms_platform',
		dataList: [
			{ dictLabel: '阿里云', dictValue: '0', labelClass: '' },
			{ dictLabel: '腾讯云', dictValue: '1', labelClass: '' },
			{ dictLabel: '七牛云', dictValue: '2', labelClass: '' },
			{ dictLabel: '华为云', dictValue: '3', labelClass: '' }
		]
	}
]

provide('dictList', dictList)
</script>
