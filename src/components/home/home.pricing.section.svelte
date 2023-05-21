<script lang="ts">


    const plans = [
        {
            name: "Free",
            desc: "The most basic plan",
            price: { 
                unit: "$",
                amount: "0",
                desc: "Lorem ipsum dolor sit ametion consectetur adipisc elit."
            },
            features: [
                {
                    name: "300 GB Storage",
                    has: true
                },
                {
                    name: "Unlimited Photos and Videos",
                    has: true
                },
                {
                    name: "Exclusive Support",
                    has: true
                },
                {
                    name: "Custom Branding Strategy",
                    has: false
                },
                {
                    name: "Free SEO Tools",
                    has: false
                }
            ]
        },
        {
            name: "Basic",
            desc: "The most popular plan",
            price: { 
                unit: "$",
                amount: "0",
                desc: "Lorem ipsum dolor sit ametion consectetur adipisc elit."
            },
            features: [
                {
                    name: "300 GB Storage",
                    has: true
                },
                {
                    name: "Unlimited Photos and Videos",
                    has: true
                },
                {
                    name: "Exclusive Support",
                    has: true
                },
                {
                    name: "Custom Branding Strategy",
                    has: true
                },
                {
                    name: "Free SEO Tools",
                    has: false
                }
            ]
        },
        {
            name: "Basic",
            desc: "The most premium plan",
            price: { 
                unit: "$",
                amount: "0",
                desc: "Lorem ipsum dolor sit ametion consectetur adipisc elit."
            },
            features: [
                {
                    name: "300 GB Storage",
                    has: true
                },
                {
                    name: "Unlimited Photos and Videos",
                    has: true
                },
                {
                    name: "Exclusive Support",
                    has: true
                },
                {
                    name: "Custom Branding Strategy",
                    has: true
                },
                {
                    name: "Free SEO Tools",
                    has: true
                }
            ]
        }
    ]
</script>




<div class="container mx-auto  mt-24 flex w-full  bg-gradient-to-r  from-default-dark-primary  from-20%    via-default-dark-secondary to-100%  to-default-dark-primary  ">
    

        {#each plans as plan, i }
            <div 
          
            class="w-full overflow-hidden">
                <div class="border-r-{i !== 2 ? 2 : 0} border-default-dark-secondary">
                    <div class="border-b-2 border-gray-700">
                        <div  class="p-16 flex flex-col  text-center gap-4">
                            <h3 class="text-4xl font-bold text-gray-200">{plan.name}</h3>
                            <span class="text-xl text-gray-400">
                                The most basic plan
                            </span>
                        </div>
                    </div>

                    <div class="border-b-2 border-default-dark-secondary">
                        <div  class="py-16 flex flex-col  text-center gap-4">
                            <span class="text-6xl font-bold text-gray-200">

                                <small class="text-2xl">{plan.price.unit}</small>
                                {plan.price.amount}<small class="text-2xl">/month</small>
                            </span>
                            <span class="text-xl px-16 text-gray-400">
                                Lorem ipsum dolor sit ametion consectetur adipisc elit.
                            </span>
                        </div>
                    </div>

                    <div >
                        <div  class="p-16 flex flex-col  text-center gap-4">
                            {#each plan.features as feature}


                            <span class="text-xl flex gap-6 text-gray-400">
                                <svg width="34" height="34" viewBox="0 0 24 24" class="if { feature.has ? "fill-green-500": "fill-gray-500"}">
                                    <path d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"></path>
                                </svg> {feature.name}
                            </span>
                       
                    
                        {/each}
                        </div>
                       
                       
                      
                    </div>
                </div>
            </div>
        {/each}


     
</div>

<div class="container mx-auto">
    <h4 class="text-4xl font-bold text-center mt-24 text-gray-200">
        Looking for a company solution?
    </h4>

    <span class="block text-center p-6 text-xl text-gray-400">
        Contact our team to get a quote.
    </span>
</div>