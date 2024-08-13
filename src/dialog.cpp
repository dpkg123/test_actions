#include <QDialog>

namespace Ui {
class HelpDialog;
}

class HelpDialog : public QDialog
{
    Q_OBJECT

public:
    explicit HelpDialog(QWidget *parent = nullptr);
    ~HelpDialog();

private Q_SLOTS:
    void on_closeBtn_clicked();

private:
    Ui::HelpDialog *ui;
};

HelpDialog::~HelpDialog()
{
    delete ui;
}

void HelpDialog::on_closeBtn_clicked()
{
    close();

