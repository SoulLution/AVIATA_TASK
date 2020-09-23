<template>
  <div class="index">
    <div class="content py-2 flex row">
			<div class="sticky t-2 h-0 col w-1/4 mr-0.625 color-dark mob:t-0 mob:l-0 mob:h-100 mob:bg-white mob:w-100 mob:fixed mob:z-100 transition-0.3" 
					 :class="burger ? 'mob:transform-translateX--100' : 'mob:transform-translateX-0'"
			>
				<div class="bg-d_white mb-3 p-3 bradius-4 mob:mx-4">
					<h3 class="m-0 flex row justify-between items-center">
						<span class="tab:size-14">Опции тарифа</span>
						<svg width="20" height="20" viewBox="0 0 20 20" class="for-popup color-d_grey hover:color-info cursor-pointer" v-if="options.find(x => x.check)" @click="removeAllInArray(options)">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M10.6464 8.64648L13.2929 6.00004L10.6464 3.35359L11.3535 2.64648L14 5.29293L16.6464 2.64648L17.3535 3.35359L14.7071 6.00004L17.3535 8.64648L16.6464 9.35359L14 6.70714L11.3535 9.35359L10.6464 8.64648ZM2.91465 6.00003H8C8 6.34074 8.0284 6.67482 8.08296 7.00003H2.91465C2.70873 7.58263 2.15311 8.00003 1.5 8.00003C0.671573 8.00003 0 7.32846 0 6.50003C0 5.6716 0.671573 5.00003 1.5 5.00003C2.15311 5.00003 2.70873 5.41743 2.91465 6.00003ZM7.91465 10H9.52779C9.86799 10.3801 10.2559 10.7166 10.6822 11H7.91465C7.70873 11.5826 7.15311 12 6.5 12C5.84689 12 5.29127 11.5826 5.08535 11H0.5C0.223858 11 0 10.7762 0 10.5C0 10.2239 0.223858 10 0.5 10H5.08535C5.29127 9.41743 5.84689 9.00003 6.5 9.00003C7.15311 9.00003 7.70873 9.41743 7.91465 10ZM2.91465 14C2.70873 13.4174 2.15311 13 1.5 13C0.671573 13 0 13.6716 0 14.5C0 15.3285 0.671573 16 1.5 16C2.15311 16 2.70873 15.5826 2.91465 15H14.5C14.7761 15 15 14.7762 15 14.5C15 14.2239 14.7761 14 14.5 14H2.91465Z"/>
						</svg>
						<div>
							<v-popup-min class="open-popup absolute p-3 bg-white border-1 border-d_grey bradius-6 size-12 weight-400 text-nowrap cursor-pointer hover:bg-info hover:color-white mob:none" @click="removeAllInArray(options)" v-if="options.find(x => x.check)">
								<span class="z-1 relative">Сбросить выбор</span>
							</v-popup-min>
						</div>
					</h3>
					<v-check-box class="py-1.5 hover:bg-check-box_hover" v-model="option.check" :title="option.title" v-for="option in options" :key="option.id"/>
				</div>
				<div class="bg-d_white mb-3 p-3 bradius-4 mob:mx-4">
					<h3 class="m-0 flex row justify-between items-center">
						<span class="tab:size-14">Авиакомпании</span>
						<svg width="20" height="20" viewBox="0 0 20 20" class="for-popup color-d_grey hover:color-info cursor-pointer"v-if="airlines.find(x => x.check)" @click="removeAllInArray(airlines)">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M10.6464 8.64648L13.2929 6.00004L10.6464 3.35359L11.3535 2.64648L14 5.29293L16.6464 2.64648L17.3535 3.35359L14.7071 6.00004L17.3535 8.64648L16.6464 9.35359L14 6.70714L11.3535 9.35359L10.6464 8.64648ZM2.91465 6.00003H8C8 6.34074 8.0284 6.67482 8.08296 7.00003H2.91465C2.70873 7.58263 2.15311 8.00003 1.5 8.00003C0.671573 8.00003 0 7.32846 0 6.50003C0 5.6716 0.671573 5.00003 1.5 5.00003C2.15311 5.00003 2.70873 5.41743 2.91465 6.00003ZM7.91465 10H9.52779C9.86799 10.3801 10.2559 10.7166 10.6822 11H7.91465C7.70873 11.5826 7.15311 12 6.5 12C5.84689 12 5.29127 11.5826 5.08535 11H0.5C0.223858 11 0 10.7762 0 10.5C0 10.2239 0.223858 10 0.5 10H5.08535C5.29127 9.41743 5.84689 9.00003 6.5 9.00003C7.15311 9.00003 7.70873 9.41743 7.91465 10ZM2.91465 14C2.70873 13.4174 2.15311 13 1.5 13C0.671573 13 0 13.6716 0 14.5C0 15.3285 0.671573 16 1.5 16C2.15311 16 2.70873 15.5826 2.91465 15H14.5C14.7761 15 15 14.7762 15 14.5C15 14.2239 14.7761 14 14.5 14H2.91465Z"/>
						</svg>
						<div>
							<v-popup-min class="open-popup absolute p-3 bg-white border-1 border-d_grey bradius-6 size-12 weight-400 text-nowrap cursor-pointer hover:bg-info hover:color-white mob:none" @click="removeAllInArray(airlines)" v-if="airlines.find(x => x.check)">
								<span class="z-1 relative">Сбросить выбор</span>
							</v-popup-min>
						</div>
					</h3>
					<v-check-box class="py-1.5 hover:bg-check-box_hover" v-model="line.check" :title="line.title" v-for="line in airlines" :key="line.key"/>
				</div>
				<div>
					<span class="w-auto color-info border-dashed border-info hover:color-error hover:border-error cursor-pointer mob:mx-4" @click="removeAllInArray(options); removeAllInArray(airlines)">Сбросить все фильтры</span>
					<span class="mt-3 none mob:flex mob:mx-4">Билетов найденно: {{tickets.length}}</span>
				</div>
			</div>
    	<div class="burger bg-l_info bradius-rounded p-3 r-4 t-2 mob:fixed col h-40 none mob:flex mob:z-100 cursor-pointer" :class="{'active': !burger}" @click="burger = !burger">
    		<div class="bg-d_grey" v-for="i in 3" :key="i"></div>
    	</div>
			<div class="w-3/4 mob:w-100">
				<div class="flex bg-white mb-3 bradius-4 tab:col" v-for="ticket in tickets" :key="ticket.id">
					<div class="flex col w-3/4 px-11 pt-10 pb-4 justify-between tab:w-100 xs:p-2">
						<div class="flex row h-100 mb-13 justify-between xs:col">


							<div class="flex row items-center weight-600 size-14">
								<img class="h-20" :src="'https://aviata.kz/static/airline-logos/80x80/' + ticket.validating_carrier + '.png'">
								<span class="text-nowrap ml-3">{{getAirlines[ticket.validating_carrier]}}</span>
							</div>

							<div class="flex row color-dark items-start w-3/4 xs:w-100 xs:col xs:items-center">
								<div class="flex col items-center w-1/4">
									<span class="size-12"> {{getDate(ticket.itineraries[0][0].dep_date)}} </span>
									<div class="size-24 weight-600">{{getTime(ticket.itineraries[0][0].dep_date)}}</div>
								</div>

								<div class="flex col color-d_grey w-2/4 xs:w-100">
									<div class="flex row justify-between">
										<span>{{ticket.itineraries[0][0].segments[0].origin_code}}</span>
										<div class="color-dark">{{getBetweenTime(ticket.itineraries[0][0].dep_date, ticket.itineraries[0][0].arr_date)}}</div>
										<span>{{ticket.itineraries[0][0].segments[ticket.itineraries[0][0].segments.length-1].dest_code}}</span>
									</div>
									<div class="flex row justify-between items-center w-100 h-1 mt-2 bg-d_grey">
										<div class="h-5 w-5 bg-white bradius-rounded border-1 border-d_grey" 
												 v-for="i in (ticket.itineraries[0][0].segments.length + 1)" 
												 :key="i">
										</div>
									</div>
									<div class="flex justify-center mt-1 color-warn size-12" v-if="ticket.itineraries[0][0].layovers.length">
										через 
										{{ticket.itineraries[0][0].segments[1].origin}}
										{{getBetweenTime(ticket.itineraries[0][0].segments[0].arr_time_iso, ticket.itineraries[0][0].segments[1].dep_time_iso)}}
									</div>
								</div>

								<div class="flex col w-1/4 items-center">
									<div class="flex row size-12">
										<span>{{getDate(ticket.itineraries[0][0].arr_date)}} </span>
										<div class="color-error" v-if="dateRange(ticket.itineraries[0][0].dep_date, ticket.itineraries[0][0].arr_date)">+{{dateRange(ticket.itineraries[0][0].dep_date, ticket.itineraries[0][0].arr_date)}}</div>
									</div>
									<div class="size-24 weight-600">{{getTime(ticket.itineraries[0][0].arr_date)}}</div>
								</div>
							</div>


						</div>

						<div class="flex row size-12 justifu-between xs:col">
							<div class="flex row w-auto">
								<label class="cursor-pointer text-nowrap w-auto color-info border-dashed border-info hover:color-error hover:border-error mr-6">Детали перелета</label>
								<label class="cursor-pointer text-nowrap w-auto color-info border-dashed border-info hover:color-error hover:border-error mr-11">Условия тарифа</label>
							</div>
							<div class="color-grey flex items-center w-100 xs:mt-3" v-if="!ticket.refundable">
								<img src="@/assets/img/icon-non-refundeble.svg">
								<span>невозвратный</span>
							</div>
						</div>
						
					</div>

					<div class="flex col color-dark bg-d_white w-1/4 px-5 pt-3 pb-4 items-center justify-between tab:w-100">
						<div class="felx col items-center w-100 tab:text-center">
							<div class="flex justify-center items-end mb-3 size-24 tab:size-32">
								<span class="mr-2">{{ticket.price}} </span>
								<span class="size-18 tab:size-24">₸</span>
							</div>
							<v-button class="w-100 size-18 weight-600 px-3 py-3 bg-success color-white hover:bg-info tab:w-4/5" title="Выбрать"/>
						</div>
						<span class="color-grey size-12 text-nowrap tab:size-18 xs:size-12">Цена за всех пассажиров</span>
						<div class="relative flex row items-center justify-between tab:col xl_tab:col">
							<span class="color-dark text-nowrap size-12 tab:size-18">{{ticket.cur_service ? ticket.cur_service.value : 'Нет багажа'}}</span>
							<v-button class="for-popup py-5px px-2 ml-3 bg-l_info size-12 color-d_info text-nowrap hover:bg-info hover:color-white tab:size-18" title="Добавить багаж" icon="plus" v-if="!ticket.services['0PC']"/>
							<div>
								<v-popup-min class="open-popup absolute p-3 bg-white border-1 border-d_grey bradius-6 size-12 weight-400 text-nowrap hover:bg-info hover:color-white" v-if="!ticket.services['0PC']">
									<span class="z-1 relative cursor-pointer " @click="addServise(ticket, service)" v-for="service in ticket.services">до {{service.value}}</span>
								</v-popup-min>
							</div>
						</div>
						<!-- {{ticket}} -->
					</div>

				</div>
			</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'indexPage',
  data () {
    return {
			airlines: [],
			tickets: [],
			burger: true,
			options: [
				{
					id: 1,
					title: 'Только прямые',
					check: false
				},
				{
					id: 2,
					title: 'Только с багажом',
					check: false
				},
				{
					id: 3,
					title: 'Только возвратные',
					check: false
				}
			]
    }
	},
  computed: {
  	getTickets() {
  		return this.$store.getters['tickets/getItems']
  	},
  	getAirlines() {
  		return this.$store.getters['tickets/getAirlines']
  	}
	},
	watch: {
		'$route.query': {
			handler(query) {
				let data = JSON.parse(JSON.stringify(query))
				let options = data.options || '',
						airlines = data.airlines || ''
				options = options.length ? options.split('&') : ''
				airlines = airlines.length ? airlines.split('&') : ''
				this.searchTickets(options, airlines)
			},
			deep: true,
			immediate: true
		},
		getTickets(newData){
			this.tickets = JSON.parse(JSON.stringify(newData))
		},
		options: {
			handler(newData){
				let filtered = newData.filter(x => x.check)
				this.handleRouting(filtered, 'options', 'id')
			},
			deep: true
		},
		airlines: {
			handler(newData){
				let filtered = newData.filter(x => x.check)
				if(filtered.find( x => x.key === 'ALL'))
					filtered = [{
						title: 'Все',
						key: 'ALL',
						check: true

				}]
				this.handleRouting(filtered, 'airlines', 'key')
			},
			deep: true
		},
		getAirlines: {
			handler(newData){
				this.airlines = Object.keys(newData).map( i => {
					return {
						title: newData[i],
						key: i,
						check: false
					}
				})
				this.airlines.splice(0, 0, {
						title: 'Все',
						key: 'ALL',
						check: false

				})
				if(this.$route.query.airlines)
					this.airlines.forEach(x => {
						if(this.$route.query.airlines.indexOf(x.key) > -1)
							x.check = true
					})
			}
		}
	},
	created(){
		if(!this.$route.query.options && !this.$route.query.airlines)
			this.$store.dispatch('tickets/getData', {})
	},
	mounted(){
		if(this.$route.query.options)
			this.options.forEach(x => {
				if(this.$route.query.options.indexOf(x.id) > -1)
					x.check = true
			})
	},
	methods: {
		addServise(ticket, service){
			this.$set(ticket, 'cur_service', service)
		},
		searchTickets(options, airlines){
			this.$store.dispatch('tickets/getData', { options, airlines })
		},
		removeAllInArray(arr){
			arr.forEach(x => {
				x.check = false
			});
		},
		handleRouting(newData, key, idName){
			let filtered = JSON.parse(JSON.stringify(newData))
			console.log(filtered)
			if(!filtered.length){
				let query = JSON.parse(JSON.stringify(this.$route.query))
				delete query[key]
				this.$router.push({ path: '/', query: {...query} })
			}else{
				let value = ''
				for(let i in filtered)
					value += filtered[i][idName] + (i < filtered.length-1 ? '&' : '')
				this.$router.push({ path: '/', query: {...this.$route.query, [key]: value } })
			}
		},
		getBetweenTime(firstDate, secondDate) {
			let first = new Date(firstDate).valueOf(),
					second = new Date(secondDate).valueOf()
			let minutes = (second - first) / 1000 / 60,
					hours = 0
			while(minutes >= 60){
				hours++
				minutes -= 60
			}
			return hours + ' ч ' + this.$f.checkIntOnZero(minutes) + ' м'
		},
		dateRange(firstDate, secondDate) {
			let first = new Date(new Date(firstDate).setHours(0,0,0,0)),
					second = new Date(new Date(secondDate).setHours(0,0,0,0)),
					result = 0
			while(first.getFullYear() !== second.getFullYear() || first.getMonth() !== second.getMonth() || first.getDate() !== second.getDate()){
				result++
				first = new Date(new Date(first).setHours(0,0,0,0) + (1000 * 60 * 60 * 24))
			}
			return result
		},
		getDate(date){
			let result = new Date(date)
			return result.getDate() + ' ' + this.$f.getShortMonthName(result) + ', ' + this.$f.getShortDayName(result)
		},
		getTime(date){
			let result = new Date(date)
			return this.$f.checkIntOnZero(result.getHours()) + ':' + this.$f.checkIntOnZero(result.getMinutes())
		}
	}
}
</script>

<style lang="scss">
	.for-popup{
		&~div{
			opacity: 0;
			position: absolute;
			right: 0;
			transform: translate(calc(50% - 20px), -50%);
			transition: transform 0.3s, opacity 0.2s;
			&:hover{
				transform: translate(calc(50% - 20px), -100%);
				opacity: 1;
			}
		}
		&:hover~div{
			transform: translate(calc(50% - 20px), -100%);
			opacity: 1;
		}
	}
	.burger{
		&.active{
			&>div{
				transform: rotate(45deg) translate(0px, 0px);
				&:first-child{
					transform: rotate(-45deg) translate(-5px, 5px);
				}
				&:last-child{
					opacity: 0;
					margin-top: 0;
				}
			}
		}
		&:hover{
			&>div{
				border-top: 1px solid white;
				border-bottom: 1px solid white;
				margin-top: 4px;
				&:first-child{
					margin-top: -1px;
				}
			}	
		}
		&>div{
			width: 24px;
			max-height: 1px;
			min-height: 1px;
			margin-top: 6px;
			transition: transform 0.3s;
			&:first-child{
				margin-top: 0px;
			}
		}
	}
</style>