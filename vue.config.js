module.exports = {
    productionSourceMap: false,

    chainWebpack: config => {
        // remove the prefetch plugin
        config.plugins.delete('prefetch')
    },

    configureWebpack: {


        // module: {
        //     rules: [
        //         {
        //             test: /\.(png|jpg|gif)$/i,
        //             use: [
        //                 {
        //                     loader: 'url-loader',
        //                     options: {
        //                         limit: false,
        //                     },
        //                 },
        //             ],
        //         },
        //     ],
        // },




    }



}