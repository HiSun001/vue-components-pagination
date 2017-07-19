<template>
    <ul class="pagination" v-if="lastIndex > 1">
        <li :class="{disabled: currentPage == 1}" @click="prev">
            <a href="javascript:void(0);">上一页</a>
        </li>
        <li v-for="index in indexs" :class="{active: currentPage == index}" @click="pageClick(index)">
            <a href="javascript:void(0);">{{index}}</a>
        </li>
        <li :class="{disabled: currentPage == lastIndex}" @click="next">
            <a href="javascript:void(0);">下一页</a>
        </li>
    </ul>
</template>

<style lang="less">
    ul {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    a {
        text-decoration: none;
    }
    .pagination {
        display: inline-block;
        padding-left: 0;
        margin: 20px 0;
        border-radius: 4px;

        & > li {
            display: inline;
            & > a {
                float: left;
                padding: 6px 12px;
                margin-left: -1px;
                line-height: 1.42857143;
                color: #337ab7;
                background-color: #fff;
                border: 1px solid #ddd;
            }
            &:first-child a {
                margin-left: 0;
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
            }
            &:last-child a {
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
            }
        }
        & > .disabled {
    
            & > a {
                color: #777;
                cursor: not-allowed;
                background-color: #fff;
                border-color: #ddd;
            }
        }
        & > .active {
    
            & > a {
                z-index: 3;
                color: #fff;
                cursor: default;
                background-color: #337ab7;
                border-color: #337ab7;
            }
        }
    }
</style>
<script>
    
    export default {
        props: ['options'],
        data() {
            let _this = this;
            return {
                total: _this.options.total || 0,
                numDisplayEntries: _this.options.numDisplayEntries || 5, //主体页数
                currentPage: _this.options.currentPage || 1, //指明选中页码
                pageSize: _this.options.pageSize || 10
            };
        },
        methods: {
	        setPageOpts () {
                let _this = this;

                _this.total = _this.options.total || _this.total,
                _this.numDisplayEntries = _this.options.numDisplayEntries || _this.numDisplayEntries, //主体页数
                _this.currentPage = _this.options.currentPage || _this.currentPage, //指明选中页码
                _this.pageSize = _this.options.pageSize || _this.pageSize;
            },
            // 页码点击事件
            pageClick (index) {
                if(index == this.currentPage) return;
                this.currentPage = index;

                this.$emit('pagination',this.currentPage);
            },
            // 上一页
            prev () {
                if(this.currentPage > 1) {
                    this.pageClick(this.currentPage - 1);
                }
            },
            // 下一页
            next () {
                if(this.currentPage < this.lastIndex) {
                    this.pageClick(this.currentPage + 1);
                }
            }
        },
        computed: {
            indexs () {

                var _this = this;
                var list = [];
                var opts = {
                    total: _this.total,  // 总数
                    pageSize: _this.pageSize,
                    currentPage: _this.currentPage,//指明选中页码
                    numDisplayEntries: _this.numDisplayEntries //主体页数
                } // 参数
                var lastIndex = _this.lastIndex; // 最大页码
                var startCount = 1,
                    endCount = lastIndex;
                if(lastIndex > opts.numDisplayEntries) {
                    
                    if(opts.currentPage >= opts.numDisplayEntries) {
                        if(opts.currentPage <= (lastIndex - 1)) {
                            startCount = (opts.currentPage + 1 - opts.numDisplayEntries + 1),
                            endCount = opts.currentPage + 1;
                        } else {
                        
                            startCount = (opts.currentPage - opts.numDisplayEntries + 1),
                            endCount = opts.currentPage;
                        }
                    } else {
                        startCount = 1,
                        endCount = opts.numDisplayEntries;
                    }
                }

                for(var i = startCount;i <= endCount;i++) {
                    list.push(i);
                }

                return list;
            },
             // 最大页码
            lastIndex () {
                var opts = {
                    total: this.total,  // 总数
                    pageSize: this.pageSize
                } // 参数
                return Math.ceil(opts.total/opts.pageSize);
            }
        },
        watch: {
            'options.total' () {
                this.setPageOpts();
            },
            'options.numDisplayEntries' () {
                this.setPageOpts();
            },
            'options.currentPage' () {
                this.setPageOpts();
            },
            'options.pageSize' () {
                this.setPageOpts();
            }
        }
    }
</script>