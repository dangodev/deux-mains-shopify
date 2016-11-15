<template>
  <div class="modal-mask" @click="close">
    <div class="modal" :class="{ 'is-visible': isVisible }" @click.stop>
      <div class="modal-inner">
        <a href="#" class="modal-close" @click="closeModal">✕</a>
      </div>
    </div>
  </div>
</template>
