import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class FibonacciGraphical {
    private static final int MAX_N = 500000;

    public static void main(String[] args) {
        SwingUtilities.invokeLater(FibonacciGraphical::createAndShowGUI);
    }

    private static void createAndShowGUI() {
        JFrame frame = new JFrame("Fibonacci Sequence Calculation Time");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLayout(new BorderLayout());

        JPanel inputPanel = new JPanel();
        inputPanel.setLayout(new FlowLayout());

        JLabel label = new JLabel("Enter a value for N: ");
        JTextField textField = new JTextField(10);
        JButton calculateButton = new JButton("Calculate");

        JTextArea resultTextArea = new JTextArea(10, 30);
        resultTextArea.setEditable(false);
        JScrollPane scrollPane = new JScrollPane(resultTextArea);

        JButton plotButton = new JButton("Plot Time Difference");
        JPanel plotPanel = new JPanel();

        plotButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String input = textField.getText();
                try {
                    int n = Integer.parseInt(input);
                    if (n < 1 || n > MAX_N) {
                        JOptionPane.showMessageDialog(frame, "Please enter a value between 1 and " + MAX_N + ".");
                    } else {
                        long[] times = new long[n];
                        for (int i = 1; i <= n; i++) {
                            long startTime = System.currentTimeMillis();
                            fibonacci(i);
                            long endTime = System.currentTimeMillis();
                            times[i - 1] = endTime - startTime;
                        }
                        plotTimeDifference(n, times);
                    }
                } catch (NumberFormatException ex) {
                    JOptionPane.showMessageDialog(frame, "Invalid input. Please enter a valid integer.");
                }
            }
        });

        inputPanel.add(label);
        inputPanel.add(textField);
        inputPanel.add(calculateButton);

        plotPanel.add(plotButton);

        frame.add(inputPanel, BorderLayout.NORTH);
        frame.add(scrollPane, BorderLayout.CENTER);
        frame.add(plotPanel, BorderLayout.SOUTH);
        frame.pack();
        frame.setVisible(true);
    }

    private static void plotTimeDifference(int n, long[] times) {
        SwingUtilities.invokeLater(() -> {
            JFrame frame = new JFrame("Fibonacci Sequence Time Difference");
            frame.setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);

            long[] differences = new long[n];
            differences[0] = 0;
            for (int i = 1; i < n; i++) {
                differences[i] = times[i] - times[i - 1];
            }

            PlotPanel plotPanel = new PlotPanel(differences, n);
            frame.add(plotPanel);

            frame.pack();
            frame.setVisible(true);
        });
    }

    private static long[] fibonacci(int n) {
        if (n <= 0) {
            return new long[0];
        } else if (n == 1) {
            return new long[]{0};
        } else if (n == 2) {
            return new long[]{0, 1};
        } else {
            long[] sequence = new long[n];
            sequence[0] = 0;
            sequence[1] = 1;
            for (int i = 2; i < n; i++) {
                sequence[i] = sequence[i - 1] + sequence[i - 2];
            }
            return sequence;
        }
    }
}

class PlotPanel extends JPanel {
    private static final int PADDING = 50;
    private static final int POINT_RADIUS = 4;

    private long[] data;
    private int n;

    public PlotPanel(long[] data, int n) {
        this.data = data;
        this.n = n;
        setPreferredSize(new Dimension(800, 600));
    }

    protected void paintComponent(Graphics g) {
        super.paintComponent(g);

        int width = getWidth();
        int height = getHeight();

        int plotWidth = width - 2 * PADDING;
        int plotHeight = height - 2 * PADDING;

        long maxDifference = findMaxDifference();

        g.setColor(Color.BLACK);
        g.drawLine(PADDING, PADDING, PADDING, height - PADDING);
        g.drawLine(PADDING, height - PADDING, width - PADDING, height - PADDING);

        g.setColor(Color.BLUE);
        for (int i = 0; i < data.length; i++) {
            int x = map(i, 0, data.length - 1, PADDING, width - PADDING);
            int y = map(data[i], 0, maxDifference, height - PADDING, PADDING);
            g.fillOval(x - POINT_RADIUS, y - POINT_RADIUS, 2 * POINT_RADIUS, 2 * POINT_RADIUS);
        }

        g.setColor(Color.RED);
        for (int i = 0; i < data.length - 1; i++) {
            int x1 = map(i, 0, data.length - 1, PADDING, width - PADDING);
            int y1 = map(data[i], 0, maxDifference, height - PADDING, PADDING);
            int x2 = map(i + 1, 0, data.length - 1, PADDING, width - PADDING);
            int y2 = map(data[i + 1], 0, maxDifference, height - PADDING, PADDING);
            g.drawLine(x1, y1, x2, y2);
        }

        g.setColor(Color.BLACK);
        g.setFont(new Font("Arial", Font.PLAIN, 10));

        // Labels on the y-axis
        g.drawString("Time Difference (milliseconds)", PADDING - 80, PADDING - 10);
        g.drawString("0", PADDING - 30, height - PADDING + 15);
        g.drawString(String.valueOf(maxDifference), PADDING - 40, PADDING - 5);

        // Labels on the x-axis
        g.drawString("N", width - PADDING + 10, height - PADDING + 20);
        int interval = Math.max(1, n / 10);
        for (int i = 0; i < n; i += interval) {
            int x = map(i, 0, n - 1, PADDING, width - PADDING);
            g.drawString(String.valueOf(i + 1), x - 5, height - PADDING + 20);
        }
        g.drawString(String.valueOf(n), width - PADDING - 5, height - PADDING + 20);
    }

    private long findMaxDifference() {
        long maxDifference = 0;
        for (long diff : data) {
            maxDifference = Math.max(maxDifference, diff);
        }
        return maxDifference;
    }

    private int map(long value, long inMin, long inMax, long outMin, long outMax) {
        return (int) ((value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin);
    }
}

