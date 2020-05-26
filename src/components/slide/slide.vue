<template>
    <div class="hd-slide" ref="slide">
        <div class="hd-silde-group" ref="slideGroup">
            <div class="hd-slide-item">a</div>
            <div class="hd-slide-item">b</div>
        </div>
    </div>
</template>
<script>
import BSroll from 'better-scroll'
export default {
    name: 'hd-slide',
    mounted() {
        this.refresh()
    },
    methods: {
        refresh() {
            this._updateSlideDom()
            this._initSlide()
        },
        _updateSlideDom() {
            this._setSlideStyle()

        },
        _setSlideStyle() {
            this.children = this.$refs.slideGroup.children
            console.log(this.children)
            let allSize = 0
            const target = 'width'
            const slideSize = this.$refs.slide.clientWidth
            const len = this.children.length

            for(let i=0; i<len; i++) {
                const child = this.children[i]
                child.style[target] = slideSize + 'px'
                allSize += slideSize
            }

            this.$refs.slideGroup.style[target] = allSize + 'px'

            console.log(slideSize)
        },
        _initSlide() {
            const options = {
                scrollX: true,
                scrollY: false,
                // eventPassthrough: 'horizontal',
                snap: {
                    loop: false,
                    threshold: 0.1
                },
                stopPropagation: false

            }
            this.slide = new BSroll(this.$refs.slide, options)
            this.slide.on('scrollEnd', function(obj) {
                console.log(obj)
            })
        }
    }
}
</script>
<style lang="scss">
.hd-slide {
    height: 100%;
    position: relative;
    overflow: hidden;
    .hd-silde-group {
        height: 100%;
        position: relative;
        white-space: nowrap;
        overflow: hidden;
        .hd-slide-item {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            float: left;
            background: rgb(250,250,250);
            text-align: center;
        }
    }
}
</style>