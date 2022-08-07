from manim import *


class MyScene(Scene):
    def construct(self):

        plane = (
            NumberPlane(x_range=[-4, 4, 1], x_length=7, y_range=[0, 16, 2], y_length=5)
            .add_coordinates()
            .to_edge(DOWN)
        )

        curve = plane.plot(lambda x: x**2, x_range=[-4, 4], color=GREEN)
        rect = plane.get_riemann_rectangles(
            graph=curve, x_range=[-2, 3], dx=0.2, stroke_width=0.5, stroke_color=WHITE
        )

        self.play(DrawBorderThenFill(plane))
        self.play(Create(curve))
        self.play(Create(rect))
        self.wait()
