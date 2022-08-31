import React from "react";
import Card from "../../../components/Card/Card";
import Section from "../../../components/Grid/Section";
import DeveloperGuideLayout from "../../../layouts/DeveloperGuide";
import CardBody from "../../../components/Card/CardBody";
import CardHead from "../../../components/Card/CardHead";

const Typography = () => {
  return (
    <DeveloperGuideLayout>
      <div className='typography'>
        <Section>
          <h1>Typography</h1>
        </Section>

        <Section>
          <h2>Typography: Block Elements</h2>

          {/* HEADINGS*/}
          <Card>
            <CardHead heading={`<h1> to <h6>`} />
            <CardBody>
              <h1>This is an h1</h1>
              <h2>This is an h2</h2>
              <h3>This is an h3</h3>
              <h4>This is an h4</h4>
              <h5>This is an h5</h5>
              <h6>This is an h6</h6>
            </CardBody>
          </Card>

          {/* PARAGRAPHS */}
          <Card>
            <CardHead heading={`<p>`} />
            <CardBody>
              <p>Paragraph with standard font size</p>
              <p className='font-size-lg'>
                Paragraph with small font size. <code>.font-size-lg</code>
              </p>
              <p className='font-size-sm'>
                Paragraph with x-small font size. <code>.font-size-sm</code>
              </p>
              <p className='footnote'>
                This is footnote text. <code>.footnote</code>
              </p>
            </CardBody>
          </Card>

          {/* SHAT SHOT */}
          <Card>
            <CardHead heading={`class='shat-shot'`} />
            <CardBody>
              <p className='shat-shot'>Shat Shot</p>
            </CardBody>
          </Card>

          {/* LABELS */}
          <Card>
            <CardHead heading={`<label>'`} />
            <CardBody>
              <label>This is a label</label>
            </CardBody>
          </Card>

          {/* BLOCK QUOTE */}
          <Card>
            <CardHead heading={`<blockquote><cite>`} />
            <CardBody>
              <blockquote>
                With great power, there must also come, great responsibility.
                <cite>Stan Lee</cite>
              </blockquote>
            </CardBody>
          </Card>

          {/* LISTS */}
          <Card>
            <CardHead heading={`<ol>, <ul>, & <dl>`} />
            <CardBody>
              <ol>
                <li>Terram, mihi crede, ea lanx et maria deprimet.</li>
                <li>
                  Partim cursu et peragratione laetantur, congregatione aliae coetum quodam modo civitatis imitantur;
                </li>
              </ol>

              <ul>
                <li>Sed quid minus probandum quam esse aliquem beatum nec satis beatum?</li>
                <li>
                  Animadverti, ínquam, te isto modo paulo ante ponere, et scio ab Antiocho nostro dici sic solere;
                </li>
              </ul>

              <dl>
                <dt>
                  <dfn>Quid vero?</dfn>
                </dt>
                <dd>Hic quoque suus est de summoque bono dissentiens dici vere Peripateticus non potest.</dd>
                <dt>
                  <dfn>Tria genera bonorum;</dfn>
                </dt>
                <dd>Dolor ergo, id est summum malum, metuetur semper, etiamsi non aderit;</dd>
              </dl>
            </CardBody>
          </Card>

          {/* CODE BLOCK */}
          <Card>
            <CardHead heading={`<pre><code lang="javascript">`} />
            <CardBody>
              <pre>
                <code lang='javascript'>{`function getIntoAnArgument(...args) => {
  args.forEach(arg => console.log(arg));
}`}</code>
              </pre>
            </CardBody>
          </Card>

          {/* ADDRESS */}
          <Card>
            <CardHead heading={`<address>`} />
            <CardBody>
              <address>
                Written by <a href='mailto:webmaster@example.com'>Jon Doe</a>.<br />
                Visit us at:
                <br />
                Example.com
                <br />
                Box 564, Disneyland
                <br />
                USA
              </address>
            </CardBody>
          </Card>
        </Section>

        <Section>
          <h2>Typography: Inline Elements</h2>

          <Card>
            <CardHead heading={`<i>`} />
            <CardBody>
              <p>
                Lorem ipsum <i>dolor sit amet</i>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardHead heading={`<b>`} />
            <CardBody>
              <p>
                Lorem ipsum <b>dolor sit amet</b>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardHead heading={`<em>`} />
            <CardBody>
              <p>
                Lorem ipsum <em>dolor sit amet</em>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardHead heading={`<strong>`} />
            <CardBody>
              <p>
                Lorem ipsum <strong>dolor sit amet</strong>, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardHead heading={`<mark>`} />
            <CardBody>
              <p>
                Lorem ipsum <mark>dolor sit amet</mark>, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardHead heading={`<abbr>`} />
            <CardBody>
              <p>
                Lorem ipsum <abbr title='dolor sit amet'>d.s.a.</abbr>, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardHead heading={`<q>`} />
            <CardBody>
              <p>
                Lorem ipsum <q cite='https://loripsum.net/'>dolor sit amet</q>, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardHead heading={`<small>`} />
            <CardBody>
              <p>
                Lorem ipsum <small>dolor sit amet</small>, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardHead heading={`<sub> & <sup>`} />
            <CardBody>
              <p>
                Lorem ipsum <sub>dolor sit amet</sub>, consectetur adipiscing elit, sed do <sup>eiusmod</sup> tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardHead heading={`<code>, <var>, <kbd>, & <samp>`} />
            <CardBody>
              <p>
                Lorem ipsum <code>dolor + sit = amet</code>, consectetur adipiscing elit, sed do <var>eiusmod</var>{" "}
                tempor incididunt ut <kbd>Ctrl + S</kbd> labore et <samp>Output</samp> dolore magna aliqua.
              </p>
            </CardBody>
          </Card>
        </Section>

        <Section>
          <h2>Examples: Put it all together</h2>
          <Card>
            <CardBody>
              <h1>Multa sunt dicta ab antiquis de contemnendis ac despiciendis rebus humanis;</h1>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scientiam pollicentur, quam non erat mirum
                sapientiae cupido patria esse cariorem. Quicquid porro animo cernimus, id omne oritur a sensibus;{" "}
              </p>

              <blockquote cite='Sullae consulatum'>
                Nunc dicam de voluptate, nihil scilicet novi, ea tamen, quae te ipsum probaturum esse confidam.
                <cite>Sullae consulatum</cite>
              </blockquote>

              <dl>
                <dt>
                  <dfn>Venit ad extremum;</dfn>
                </dt>
                <dd>Quasi ego id curem, quid ille aiat aut neget.</dd>
                <dt>
                  <dfn>Recte dicis;</dfn>
                </dt>
                <dd>
                  Itaque, ne si iucundissimis quidem nos somniis usuros putemus, Endymionis somnum nobis velimus dari,
                  idque si accidat, mortis instar putemus.
                </dd>
                <dt>
                  <dfn>Proclivi currit oratio.</dfn>
                </dt>
                <dd>Tu autem negas fortem esse quemquam posse, qui dolorem malum putet.</dd>
                <dt>
                  <dfn>Stoici scilicet.</dfn>
                </dt>
                <dd>Ut in voluptate sit, qui epuletur, in dolore, qui torqueatur.</dd>
                <dt>
                  <dfn>Sullae consulatum?</dfn>
                </dt>
                <dd>Istam voluptatem perpetuam quis potest praestare sapienti?</dd>
                <dt>
                  <dfn>Certe non potest.</dfn>
                </dt>
                <dd>Paupertas si malum est, mendicus beatus esse nemo potest, quamvis sit sapiens.</dd>
              </dl>

              <p>
                Beatus autem esse in maximarum rerum timore nemo potest. Cum id fugiunt, re eadem defendunt, quae
                Peripatetici, verba. Quamquam haec quidem praeposita recte et reiecta dicere licebit. Quorum sine causa
                fieri nihil putandum est. At ille non pertimuit saneque fidenter: Istis quidem ipsis verbis, inquit;{" "}
                <mark>Immo alio genere;</mark> Beatus autem esse in maximarum rerum timore nemo potest. Sed ea mala
                virtuti magnitudine obruebantur.{" "}
              </p>

              <ol>
                <li>Res enim se praeclare habebat, et quidem in utraque parte.</li>
                <li>Hosne igitur laudas et hanc eorum, inquam, sententiam sequi nos censes oportere?</li>
                <li>Sed ut iis bonis erigimur, quae expectamus, sic laetamur iis, quae recordamur.</li>
                <li>Addo etiam illud, multa iam mihi dare signa puerum et pudoris et ingenii, sed aetatem vides.</li>
                <li>Maximas vero virtutes iacere omnis necesse est voluptate dominante.</li>
              </ol>

              <h2>Expectoque quid ad id, quod quaerebam, respondeas.</h2>

              <p>
                Omnis enim est natura diligens sui. <i>At eum nihili facit;</i> Animi enim quoque dolores percipiet
                omnibus partibus maiores quam corporis. Honesta oratio, Socratica, Platonis etiam.{" "}
                <mark>Si quae forte-possumus.</mark> Nec enim, dum metuit, iustus est, et certe, si metuere destiterit,
                non erit; <i>Haeret in salebra.</i> <code>Verba tu fingas et ea dicas, quae non sentias?</code>{" "}
              </p>

              <pre>
                Ita multo sanguine profuso in laetitia et in victoria est mortuus. Verum tamen cum de rebus grandioribus
                dicas, ipsae res verba rapiunt;
              </pre>

              <p>
                <i>Haec dicuntur inconstantissime.</i> Egone non intellego, quid sit don Graece, Latine voluptas? At hoc
                in eo M. Omnes enim iucundum motum, quo sensus hilaretur. Sed ille, ut dixi, vitiose. Erat enim
                Polemonis. Haeret in salebra. Aut unde est hoc contritum vetustate proverbium: quicum in tenebris?{" "}
              </p>

              <blockquote cite='Recte dicis'>
                Neque enim in aliqua parte, sed in perpetuitate temporis vita beata dici solet, nec appellatur omnino
                vita, nisi confecta atque absoluta, nec potest quisquam alias beatus esse, alias miser;
                <cite>Recte dicis</cite>
              </blockquote>

              <pre>
                Ergo in iis adolescentibus bonam spem esse dicemus et magnam indolem, quos suis commodis inservituros et
                quicquid ipsis expediat facturos arbitrabimur? Quam illa ardentis amores excitaret sui! Cur tandem?
              </pre>

              <ul>
                <li>Multa sunt dicta ab antiquis de contemnendis ac despiciendis rebus humanis;</li>
                <li>Scaevola tribunus plebis ferret ad plebem vellentne de ea re quaeri.</li>
                <li>
                  Sit ista in Graecorum levitate perversitas, qui maledictis insectantur eos, a quibus de veritate
                  dissentiunt.
                </li>
              </ul>

              <p>
                <b>Quod vestri non item.</b> Duo Reges: constructio interrete. <b>Sed fac ista esse non inportuna;</b>{" "}
                <i>Reguli reiciendam;</i> Eorum enim omnium multa praetermittentium, dum eligant aliquid, quod
                sequantur, quasi curta sententia;{" "}
              </p>

              <p>
                Quo studio Aristophanem putamus aetatem in litteris duxisse? Quaesita enim virtus est, non quae
                relinqueret naturam, sed quae tueretur. Quid enim de amicitia statueris utilitatis causa expetenda
                vides. Qua ex cognitione facilior facta est investigatio rerum occultissimarum. Si qua in iis corrigere
                voluit, deteriora fecit. Non igitur potestis voluptate omnia dirigentes aut tueri aut retinere virtutem.{" "}
              </p>

              <ul>
                <li>Ac tamen hic mallet non dolere.</li>
                <li>
                  In ipsa enim parum magna vis inest, ut quam optime se habere possit, si nulla cultura adhibeatur.
                </li>
              </ul>

              <p>
                Urgent tamen et nihil remittunt. Qua ex cognitione facilior facta est investigatio rerum
                occultissimarum. <code>Certe non potest.</code> Itaque fecimus. <mark>Frater et T.</mark> Quae qui non
                vident, nihil umquam magnum ac cognitione dignum amaverunt.{" "}
                <b>Quodsi ipsam honestatem undique pertectam atque absolutam.</b> Maximeque eos videre possumus res
                gestas audire et legere velle, qui a spe gerendi absunt confecti senectute.{" "}
              </p>

              <p>
                <i>Eaedem enim utilitates poterunt eas labefactare atque pervertere.</i> Isto modo, ne si avia quidem
                eius nata non esset. Primum in nostrane potestate est, quid meminerimus?{" "}
                <a href='http://loripsum.net/' target='_blank' rel='noreferrer'>
                  Sed ad rem redeamus;
                </a>{" "}
              </p>

              <h3>Sed haec nihil sane ad rem;</h3>

              <p>
                Tu enim ista lenius, hic Stoicorum more nos vexat.{" "}
                <a href='http://loripsum.net/' target='_blank' rel='noreferrer'>
                  Praeclarae mortes sunt imperatoriae;
                </a>{" "}
                Bona autem corporis huic sunt, quod posterius posui, similiora. Huius, Lyco, oratione locuples, rebus
                ipsis ielunior. Quod si ita se habeat, non possit beatam praestare vitam sapientia. Atqui, inquit, si
                Stoicis concedis ut virtus sola, si adsit vitam efficiat beatam, concedis etiam Peripateticis.{" "}
              </p>
            </CardBody>
          </Card>
        </Section>
      </div>
    </DeveloperGuideLayout>
  );
};

export default Typography;
