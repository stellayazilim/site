<script lang="ts">
	import Tab from "$components/tab/tab.svelte";
	import Tabitem from "$components/tab/tab.item.svelte";
</script>
<Tab
				currentTab="About Us"
				let:currentTab={currentTab}
				items={["About Us", "Our Mission", "Our Vision"]}  >
				
				<Tabitem tabName="About Us" currentTab={currentTab}>
					<section  class="w-full h-full py-12">
						<div class="w-full h-full bg-gradient-to-r from-default-dark-secondary to-gray-900 grid grid-cols-2">
							<div class="relative">
								<img src="/image-3.jpg" class="h-full absolute w-96" alt="workplace">
								<div class="absolute h-[25rem] w-[20rem] bg-gray-500 top-16 right-24 blur bg-opacity-70"></div>
								<img src="/image-4.jpg" alt="uidev" class="absolute top-20 right-20 before:content-['112s'] before:h-full before:w-full before:top-0 before:left-10 before:bg-red-500 before:absolute">
							</div>

							<div class="flex flex-col gap-6 justify-center text-gray-400">
								<h3  class="text-4xl font-bold text-gray-200 w-[36rem]  leading-[3rem]">
									We are Creative Digital Agency Based in TR
								</h3>

								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum sapien ac leo cursus dignissim. In ac lectus vel orci accumsan ultricies at in libero accumsan.
								</p>
								<p>
									Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis nulla. Integer vitae magna lacus. Sed venenatis auctor dolor.
								</p>
								<p>
									Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis nulla. Integer vitae magna lacus. Sed venenatis auctor dolor.
								</p>
							</div>
						</div>
					</section>
				</Tabitem>
				<Tabitem 
				tabName="Our Mission"
				currentTab={currentTab}>
					<section  class="w-full h-full py-12">
						<div class="w-full h-full bg-gradient-to-r from-default-dark-secondary to-gray-900 grid grid-cols-2">
							<div class="relative">
								<img src="/image-3.jpg" class="h-full absolute w-96" alt="workplace">
								<div class="absolute h-[25rem] w-[20rem] bg-gray-500 top-16 right-24 blur bg-opacity-70"></div>
								<img src="/image-4.jpg" alt="uidev" class="absolute top-20 right-20 before:content-['112s'] before:h-full before:w-full before:top-0 before:left-10 before:bg-red-500 before:absolute">
							</div>

							<div class="flex flex-col gap-6 justify-center text-gray-400">
								<h3  class="text-4xl font-bold text-gray-200 w-[36rem]  leading-[3rem]">
									Vizyonumuz
								</h3>

								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum sapien ac leo cursus dignissim. In ac lectus vel orci accumsan ultricies at in libero accumsan.
								</p>
								<p>
									Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis nulla. Integer vitae magna lacus. Sed venenatis auctor dolor.
								</p>
								<p>
									Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis nulla. Integer vitae magna lacus. Sed venenatis auctor dolor.
								</p>
							</div>
						</div>
					</section>
				</Tabitem>
				<Tabitem tabName="Our Vision" currentTab={currentTab}>
					<section  class="w-full h-full py-12">
						<div class="w-full h-full bg-gradient-to-r from-default-dark-secondary to-gray-900 grid grid-cols-2">
							<div class="relative">
								<img src="/image-3.jpg" class="h-full absolute w-96" alt="workplace">
								<div class="absolute h-[25rem] w-[20rem] bg-gray-500 top-16 right-24 blur bg-opacity-70"></div>
								<img src="/image-4.jpg" alt="uidev" class="absolute top-20 right-20 before:content-['112s'] before:h-full before:w-full before:top-0 before:left-10 before:bg-red-500 before:absolute">
							</div>

							<div class="flex flex-col gap-6 justify-center text-gray-400">
								<h3  class="text-4xl font-bold text-gray-200 w-[36rem]  leading-[3rem]">
									Misyonumuz
								</h3>

								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum sapien ac leo cursus dignissim. In ac lectus vel orci accumsan ultricies at in libero accumsan.
								</p>
								<p>
									Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis nulla. Integer vitae magna lacus. Sed venenatis auctor dolor.
								</p>
								<p>
									Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis nulla. Integer vitae magna lacus. Sed venenatis auctor dolor.
								</p>
							</div>
						</div>
					</section>
				</Tabitem>
</Tab>
