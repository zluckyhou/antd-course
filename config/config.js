export default {
	singular:true,
	routes:[{
		path:'/',
		component:'./HelloWorld',
		}],
	plugins:[
		['umi-plugin-react',{
			//暂时没有配置，插件不会起作用
			}],
		],
};
