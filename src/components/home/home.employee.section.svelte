<script>
    import Employecard from "$components/cards/employe.card.svelte";
    import SocialIcon from "$components/common/icon/social.svelte";
</script>

<div class="container px-44 mx-auto grid grid-cols-3 gap-12 my-24">

    <Employecard 
    image={{src: "/image-5.jpg", alt: "olivia"}}
    name="Olivia Andrium" 
    position="Project Manager">
        <SocialIcon link="#">
            <i class="fa-brands fa-facebook-f text-white text-2xl"></i>
        </SocialIcon>
        <SocialIcon link="#" >
            <i class="fa-brands fa-twitter text-white text-2xl"></i>
        </SocialIcon>
        <SocialIcon link="#">
            <i class="fa-brands fa-linkedin text-white text-2xl"></i>
        </SocialIcon>

    </Employecard>


    <Employecard 
    image={{src: "/image-6.jpg", alt: "Jemse Kemorun"}}
    name="Jemse Kemorun" 
    position="Project Designer">
        <SocialIcon  link="#">
            <i class="fa-brands fa-facebook-f text-white text-2xl"></i>
        </SocialIcon>
        <SocialIcon  link="#" >
            <i class="fa-brands fa-twitter text-white text-2xl"></i>
        </SocialIcon>
        <SocialIcon  link="#">
            <i class="fa-brands fa-linkedin text-white text-2xl"></i>
        </SocialIcon>

    </Employecard>



    <Employecard 
    image={{src: "/image-7.jpg", alt: "Avi Pestarica"}}
    name="Avi Pestarica" 
    position="Web Designer">
        <SocialIcon link="#">
            <i class="fa-brands fa-facebook-f text-white text-2xl"></i>
        </SocialIcon>
        <SocialIcon  link="#" >
            <i class="fa-brands fa-twitter text-white text-2xl"></i>
        </SocialIcon>
        <SocialIcon link="#">
            <i class="fa-brands fa-linkedin text-white text-2xl"></i>
        </SocialIcon>

    </Employecard>
    
</div>
