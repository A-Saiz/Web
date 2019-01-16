export const mode = 'none';
export const entry = './src/index.tsx';
export const output = {
    filename: './dist/bundle.js'
};
export const resolve = {
    extensions: [
        ".ts", ".tsx", ".js", ".jsx"
    ]
};
export const module = {
    rules: [
        {
        test: /\.(t|j)sx?$/, use: {
            loader: 'awesome-typescript-loader'
        }
        },
        {
        enforce: "pre", test: /\.js$/,
            loader: 'source-map-loader'
        }
    ]
};
export const externals = {
    "react": "React",
    "react-dom": "ReactDOM",
};
export const devtool = "source-map";