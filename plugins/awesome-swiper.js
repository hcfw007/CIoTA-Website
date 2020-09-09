import Vue from 'vue'
import { Swiper as SwiperClass, Autoplay } from 'swiper/core'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

import 'swiper/swiper-bundle.css'

SwiperClass.use([Autoplay])

Vue.use(getAwesomeSwiper(SwiperClass))
