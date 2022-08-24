<template>
  <main class="main">

    <section class="hero">
      <div class="hero-body">
        <p class="title">Calcul intégral</p>
        <p class="subtitle">Chapitre 5</p>
        </div>
    </section>

    <aside class="menu">
        <p class="menu-label">Plan du cours</p>
        <ul class="menu-list">
            <li><a href="#I">I. Pourquoi le calcul intégral ? - Introduction</a></li>
            <li>
                <ul>
                    <li><a href="#I.1">I.1. Un exemple de mécanique</a></li>

                </ul>
            </li>
            <li><a href="#II">II. Intégrale et aire - Propriétés fondamentales</a></li>
            <li><a href="#III">III. Calcul d'intégrales, lien avec les primitives</a></li>
            <li><a href="#IV">IV. Manipulation avancée des intégrales</a></li>
        </ul>
    </aside>

    <section class="section">
        <h4 class="title is-4" id="I">I. Pourquoi le calcul intégral ? - Introduction</h4>
        <div class="content">
            <p>Le calcul intégral est l'un des éléments d'une branche de l'analyse mathématique, appelée <i>calcul infinitésimal</i>. Il traite de problématiques à la fois très pratiques et très théoriques, et regorge d'exemples d'application. Nous verrons plus loin qu'il est né de problèmes que se sont posés mathématiciens, physiciens et philosophes pendant des siècles. Afin de bien aborder ces problèmes, débutons avec un exemple qui devrait vous fournir une compréhension pratique du concept. Faisons donc de la mécanique.</p>
            <h5 class="title is-5" id="I.1">I.1. Un exemple de mécanique</h5>
            <p>Cette vidéo nous montre simplement l'accélération d'une voiture. Pour celles et ceux qui sont sur le point de passer leur permis, évitez de pousser à ce point sur l'accélérateur, conseil pour votre santé...</p>
            <p>Supposons que la décélération de la voiture, que l'on ne voit pas sur la vidéo, se fasse exactement comme l'accélération, mais "à l'envers" : la voiture passe de $250$ à $0\text{km/h}$ aussi rapidement qu'elle a accéléré. On étudie alors le mouvement de la voiture sur une durée deux fois supérieure à celle de cet extrait (pour ajouter le temps de la décélération), soit $40\text{s}$. Tentons donc de répondre à la question suivante :</p>
            <p class="subtitle">Quelle distance la voiture a-t-elle parcourue sur cet intervalle de temps ?</p>
        </div>
    </section>

    <!-- <section class="section is-large" data-aos="fade-up" data-aos-duration="1000">

        <article class="message is-info is-fluid">
        <div class="message-header">$\text{Valeur moyenne d'une fonction }f$</div>
        <div class="message-body">
            <div class="content">
            Soient $a,b\in\mathbb{R}, a &lt; b$, tel donc que $[a,b]\subset\mathbb{R}$. Soit $f$ une fonction intégrable (au sens de Riemann) sur $[a,b]$. La valeur moyenne de $f$ sur l'intervalle $[a,b]$ est définie par :
            <p class="is-size-5">
                \[
                    M=\frac{1}{b-a}\int_a^bf(x)dx.
                \]
            </p>
            </div>
        </div>
        </article>
    </section>

    <section class="section is-large" data-aos="fade-up" data-aos-duration="1000">
        <article class="message is-danger is-fluid">
        <div class="message-header">Théorème fondamental de l'analyse</div>
        <div class="message-body">
            <div class="content">
                Soit $I$ un intervalle de $\mathbb{R}$ et $f$ une fonction intégrable au sens de Riemann sur $I$. Soit $a\in I$. Alors la fonction :
                <p class="is-size-5">
                    \[
                        \begin{array}{rll}
                            F : I & \to & \mathbb{R}\\
                            x & \mapsto & \int_a^xf(t)dt
                        \end{array}
                    \]
                </p>
                vérifie :
                <p class="is-size-5">
                    \[
                        \forall x\in I, F'(x)=f(x).
                    \]
                </p>
            </div>
        </div>
        </article>
    </section> -->

  </main>
</template>

<script>

export default {
  name: 't5_integration',
  components: {
  }
}
</script>

<style>

</style>