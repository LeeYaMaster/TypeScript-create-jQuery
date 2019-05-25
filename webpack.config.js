module.exports = {
    entry: {
        'app':"./src/jquery.ts"
    },
    output: {
        filename: "jquery.js"
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                use:{
					loader:'ts-loader'
				}
            }
        ]
    }
}