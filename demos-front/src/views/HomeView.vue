<template>
  <div id="wrapper">
    <section class="section is-small">
      <h1 class="title is-3" data-aos="fade-up" data-aos-duration="2000">
        \[
          \forall \varepsilon >0, \exists \eta >0, \left(\forall x\in I, \lvert x-a\rvert &lt; \eta \Rightarrow \lvert f(x)-f(a)\rvert &lt; \varepsilon\right).
        \]
      </h1>
    </section>

    <section class="section is-medium" data-aos="fade-up" data-aos-duration="2000">
      <div class="content is-medium">
      <h2 class="title"><i>Qu'est-ce que c'est que ça ?</i></h2>
        <p>Si vous n'avez jamais suivi un cours de maths dans l'enseignement supérieur, il y a de fortes chances pour que ce qui est écrit ci-dessus ne vous parle absolument pas. Il est même probable que cela ressemble à une <i>langue étrangère</i> à vos yeux.</p>
        <p>C'est exactement ce qu'est la mathématique : un langage. Ce langage a ceci de particulier qu'il est composé d'assez peu de mots, mais que leur association constitue des possibilités infinies permettant de décrire des idées abstraites, mais qui ont toujours été d'une grande utilité à l'humanité.</p>
        <p>Ce site est là pour vous aider, que vous soyez élève du secondaire, étudiant(e) du supérieur, ou simplement curieux(se), à déchiffrer ce langage pour faire vôtres les idées qu'il permet d'exprimer. Pour cette raison, ce site propose une approche autant centrée que possible sur l'idée de <i>démonstration</i>. En effet, s'approprier les idées de la mathématique, ce n'est certainement pas utiliser sans réfléchir des théorèmes, des méthodes, des arguments déjà créés par d'autres. C'est construire soi-même sa compréhension de chaque concept, si insignifiant soit-il, choisir soigneusement ses arguments et se laisser émerveiller par l'élégance d'une idée enfin comprise, la satisfaction d'une intuition qui mène au résultat que l'on désire. Voilà ce qu'est pratiquer la mathématique. Au-delà d'une science fondamentale, elle est un art.</p>
        <p>Le nom <i>Demos</i> est né du goût de son créateur pour les jeux de mots douteux. Il reprend une abbréviation couramment utilisée en français du mot <i>démonstration</i>, qui sonne comme δῆμος (<i>dêmos</i>), <i>peuple</i> en grec ancien. Or les sciences sont la propriété de l'humanité, ce site insistera sur l'idée que la mathématique n'est pas réservée à une élite intellectuelle. Il ne prétend pas faire de vous un(e) mathématicien(ne), il prétend vous permettre d'apprécier la beauté de la discipline qu'ont construite des siècles de curiosité. N'importe qui ne souhaite pas forcément faire de la mathématique sa vie, mais n'importe qui <i>peut</i> profiter d'elle.</p>
      </div>
    </section>

     <section class="section is-medium" data-aos="fade-up" data-aos-duration="2000">
      <div class="content is-medium">
        <h2 class="title title-right">Tentons donc d'expliquer le mystérieux énoncé en haut de cette page.</h2>
        <p>Il s'agit en réalité d'une définition : celle de la <i>continuité</i>. On dit d'une fonction $f$ qu'elle est continue au point $a$ de son espace de départ lorsqu'elle vérifie la propriété énoncée en haut de cette page. Intuitivement, on apprend qu'une fonction est continue lorsque l'on peut tracer sa représentation graphique sans lever le stylo. La vraie définition de ce concept est légèrement plus compliquée que cela, mais cette astuce reste une bonne approche. À titre d'exemple, on pourra voir sur l'exemple suivant que la fonction $f$ est continue, tandis que la fonction $g$ ne l'est pas.</p>
        <video controls src="../../../anims/accueil/media/videos/continuite/1080p60/ContinuityScene.mp4"></video>
        <p>L'expression en haut de cette page qualifie plus précisément le concept que les mathématiciens appellent <i>continuité</i> : l'idée qu'il n'existe aucun "trou" dans le graphe d'une fonction, aussi "petit" soit-il. Que signifie "petit", dans ce cadre ? Quelque chose que personne ne peut voir. Un pur produit de l'imagination. Pour vous en convaincre, regardez la fonction ci-dessous, et sachez qu'elle <i>n'est pas</i> continue. On dit qu'elle admet une <i>discontinuité</i> au point $0$.</p>
        <video controls src="../../../anims/accueil/media/videos/continuite/1080p60/CounterExample.mp4"></video>
        <p>L'expression qui vous a peut-être fait peur en haut de cette page est la plus simple que les mathématiciens ont trouvée à ce jour et qui permette d'assurer qu'une fonction ne contient aucun de ces "trous" que seul l'esprit est capable de concevoir. Voici la raison pour laquelle les mathématiques sont un langage extrêmement puissant : un langage permettant d'accéder à des idées abstraites, des idées que seul votre esprit est capable de faire naître. Il est temps de donner à cet esprit une voix !</p>
      </div>
    </section>

    <!-- <section class="section is-medium" data-aos="fade-up" data-aos-duration="2000">
      <div class="content is-medium">
        <h2 class="title title-right">Tentons donc d'expliquer le mystérieux énoncé en haut de cette page.</h2>
        <ul>
          <li>Il contient des lettres étranges : $\forall$ et $\exists$. Il ne s'agit en réalité pas de lettres; ce sont des symboles qui jouent le rôle de mots, appelés <i>quantificateurs</i> :</li>
          <ul>
            <li>$\forall$ est appelé <i>quantificateur universel</i> et se lit "pour tout". Il permet d'indiquer que l'affirmation sera valable pour tous les cas précisés. $\forall \varepsilon >0$ signifie donc que <i>pour n'importe quel nombre, noté $\varepsilon$ (epsilon) et strictement positif</i>, l'affirmation qui suit est vraie;</li>
            <li>$\exists$ est appelé <i>quantificateur existentiel</i> et se lit "il existe". Il permet d'indiquer l'existence d'un objet mathématique vérifiant l'affirmation qui le suit. $\exists \eta >0$ signifie donc qu'<i>il existe un nombre, noté $\eta$ (êta) et strictement positif </i> tel que l'affirmation qui suit est vraie.</li>
          </ul>
          <li>Ces quantificateurs se lisent dans l'ordre, et cet ordre donne une signification à la phrase mathématique. Ici, on lit que pour <i>n'importe quel</i> nombre $\varepsilon$, il existe un autre nombre $\eta$ permettant de vérifier la propriété qui suit. Cela signifie que quelque soit le nombre $\varepsilon$ (pourvu qu'il reste strictement positif), on peut se débrouiller pour trouver un nombre $\eta$ permettant de vérifier le résultat qui suit.</li>
          <li>Les parenthèses qui suivent permettent d'indiquer que le reste de l'énoncé doit se lire d'un bloc.</li>
          <ul>
            <li>$\exists$ indique une relation particulière appelée <i>appartenance</i> et lue <i>$x$ appartient à $I$</i>. $x\in I$ signifie donc que $I$ est une collection d'objets mathématiques, et que $x$ en fait partie. $\forall x\in I$ signifie que ce qui suit sera vrai pour n'importe quel nombre, noté $x$, tant qu'il appartient à $I$.</li>
            <li>$\Rightarrow$ indique ce que l'on appelle une <i>implication</i> : si ce qui est à gauche de cette flèche est vrai, alors ce qui est à droite l'est forcément aussi.</li>
            <li>$\lvert x-a\rvert$ se lit <i>valeur absolue du nombre $x-a$</i>, c'est le nombre $x-a$ dépourvu de son signe (la valeur absolue de $-2$ est $2$, par exemple).</li>
          </ul>
        </ul>
          Tout cet énoncé se lit donc :
          <div class="box"><i>Pour tout nombre $\varepsilon$ strictement positif, il existe un nombre $\eta$ strictement positif tel que, pour tout objet $x$ appartenant à la collection d'objets $I$, si $x-a$ est strictement inférieur à $\eta$ en valeur absolue, alors $f(x)-f(a)$ sera strictement inférieur à $\varepsilon$ en valeur absolue.</i></div>
      </div>
    </section> -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style>

</style>