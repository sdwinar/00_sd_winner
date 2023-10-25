<style>
/*
*
* ==========================================
* CUSTOM UTIL CLASSES
* ==========================================
*
*/

.video-background-holder {
  position: relative;
  background-color: black;
  height: calc(100vh - 72px);
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
}

.video-background-holder video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

.video-background-content {
  position: relative;
  z-index: 2;
}

.video-background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 1;
}

/*
*
* ==========================================
* FOR DEMO PURPOSES
* ==========================================
*
*/

code {
  padding: 0 0.15rem;
  background: #f5f5f5;
  border-radius: 0.2rem;
}
</style>
<template>

<!-- Background video -->
<div class="video-background-holder">
  <div class="video-background-overlay"></div>
  <video playsinline autoplay muted loop>
        <source src="../../../img/10001.mp4" type="video/mp4">
    </video>
  <div class="video-background-content container h-100">
    <div class="d-flex h-100 text-center align-items-center">
      <div class="w-100 text-white">
        <h1 class="display-4">إستعد للإقلاع نحو النجاح - مع موقع سِد - وينر </h1>
        <p class="lead mb-100">قبل الإنطلاق تأكد بانك في المكان الموثوق والمضمون</p>
        <p class="lead">Snippet by <a href="https://bootstrapious.com/snippets" class="text-white">
                    <u>Bootstrapious</u></a>
        </p>
      </div>
    </div>
  </div>
</div>
<!-- End -->
<!-- For demo purpose -->
<section class="py-5">
  <div class="container py-5">
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <p class="lead">The whole content is wrapped into <code>.video-background-holder</code>, this class is mainly used to set the content dimensions, location and the fallback background in case the browser doesn't support the video format.</p>
        <p class="lead">Change your video source from <code>source</code> tag, and the overlay color from <code>.video-background-overlay</code>.</p>
        <p class="lead">The content text wrapped into <code>.video-background-content</code> is vertically centered using flex utilities.</p>
      </div>
    </div>
  </div>
</section>
<!-- End -->
</template>
