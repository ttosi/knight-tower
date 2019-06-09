<template>
    <div>
        <site-header></site-header>
        <div id="content">
            <home></home>
            <div class="columns">
              <div class="column">
                <player-card class="has-background-light box"></player-card>
              </div>
              <div class="column is-half">
                <board class="has-background-light box"></board>
              </div>
              <div class="column">
                <tower class="has-background-light box"></tower>
              </div>
            </div>
        </div>
        <site-footer></site-footer>
    </div>
</template>

<script>
import SiteHeader from "@/components/Header.vue";
import Home from "@/components/Home.vue";
import PlayerCard from "@/components/PlayerCard.vue";
import Board from "@/components/Board.vue";
import Tower from "@/components/Tower.vue";
import SiteFooter from "@/components/Footer.vue";

export default {
    components: {
        SiteHeader,
        Home,
        PlayerCard,
        Board,
        Tower,
        SiteFooter
    }
};
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

$light: #dfddc7;
$light-invert: findColorInvert($light);
$medium-light: #f58b54;
$medium-light-invert: findColorInvert($medium-light);
$medium-dark: #a34a28;
$medium-dark-invert: findColorInvert($medium-dark);
$dark: #211717;
$dark-invert: findColorInvert($dark);

$primary: #ff0000;
$primary-invert: findColorInvert($primary);

$text: #666;
$text-invert: findColorInvert($text);

$colors: (
    "white": (
        $white,
        $black
    ),
    "black": (
        $black,
        $white
    ),
    "light": (
        $light,
        $light-invert
    ),
    "dark": (
        $dark,
        $dark-invert
    ),
    "medium-light": (
        $medium-light,
        $medium-light-invert
    ),
    "medium-dark": (
        $medium-dark,
        $medium-dark-invert
    ),
    "primary": (
        $primary,
        $primary-invert
    ),
    "info": (
        $info,
        $info-invert
    ),
    "success": (
        $success,
        $success-invert
    ),
    "warning": (
        $warning,
        $warning-invert
    ),
    "danger": (
        $danger,
        $danger-invert
    ),
    "text": (
        $text,
        $text-invert
    )
);

$family-sans-serif: "Source Sans Pro", sans-serif;
$family-primary: $family-sans-serif;

@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
