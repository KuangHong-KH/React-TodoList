let storage={
    set(key,val){
        localStorage.setItem(key,JSON.stringify(val))
    },
    get(key){
        return JSON.parse(localStorage.getItem(key));
    },
    remove(key){
        localStorage.removeItem(key)
    }
}
export default storage;//暴露模块，供其他组件引用需要的，不能少