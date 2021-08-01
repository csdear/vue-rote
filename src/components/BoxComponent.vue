<template>
    <div class="box">
                      <article class="media">
                        <div class="media-left">
                          <figure class="image is-128x128">
                            <slot name="image"></slot>  <!--Content for slot 'image' injected here-->
                          </figure>
                        </div>
                        <div class="media-content">
                          <div class="content">
                            <slot name="content"></slot> <!--Content for slot 'content' injected here-->
                          </div>
                        </div>
                      </article>
    </div>
</template>

<style scoped>
.box {
width: 50vw;
}
.hero, .container {
margin-bottom: 20px;
}
</style>