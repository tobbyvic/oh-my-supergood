import vue from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: 'src/index.js',
    output: {
        format: 'esm',
        file: 'dist/my-component.js'
    },
    plugins: [
        commonjs(),
        vue()
    ]
}
