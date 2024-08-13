#include <QList>
#include <QSizeF>
#include <QDebug>
#include <QIODevice>
#include <QTextStream>

class KoShapeLayer;
class KoShapeGroup;
class KoShape;
class KoPathShape;
class QIODevice;
class QString;
class HtmlSavingContext;

// Implements writing shapes to HTML
class HtmlWriter
{
public:
    HtmlWriter(const QList<KoShape*> &toplevelShapes);
    virtual ~HtmlWriter();

    bool save(QIODevice &outputDevice);

    QStringList errors() const;
    QStringList warnings() const;

private:

    void saveShapes(const QList<KoShape*> shapes, HtmlSavingContext &savingContext);

    QList<KoShape*> m_toplevelShapes;
    QStringList m_errors;
    QStringList m_warnings;
};

HtmlWriter::HtmlWriter(const QList<KoShape*> &toplevelShapes)
    : m_toplevelShapes(toplevelShapes)
{
}

HtmlWriter::~HtmlWriter()
{
}

QStringList HtmlWriter::errors() const
{
    return m_errors;
}

QStringList HtmlWriter::warnings() const
{
    return m_warnings;
}
