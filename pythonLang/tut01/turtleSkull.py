import turtle

# Configurazione iniziale
window = turtle.Screen()
window.bgcolor("black")
window.title("Disegno di un teschio")
pen = turtle.Turtle()
pen.color("white")
pen.speed(3)

# Disegno del teschio
pen.penup()
pen.goto(0, -100)
pen.pendown()
pen.begin_fill()
pen.circle(100)  # Testa del teschio
pen.end_fill()

pen.penup()
pen.goto(-30, 0)
pen.pendown()
pen.color("black")
pen.begin_fill()
pen.circle(20)  # Occhio sinistro
pen.end_fill()

pen.penup()
pen.goto(30, 0)
pen.pendown()
pen.begin_fill()
pen.circle(20)  # Occhio destro
pen.end_fill()

pen.penup()
pen.goto(0, -40)
pen.pendown()
pen.width(5)
pen.goto(0, -70)  # Naso

pen.penup()
pen.goto(-40, -130)
pen.pendown()
pen.setheading(-60)
pen.circle(40, 120)  # Mascella sinistra

pen.penup()
pen.goto(40, -130)
pen.pendown()
pen.setheading(-120)
pen.circle(-40, -120)  # Mascella destra

# Fine del disegno
turtle.done()

