import React, {useEffect} from "react";
import {MapContainer, Marker, Polygon, Popup, TileLayer, Tooltip} from "react-leaflet";
import "./map.css";
import {getEvents} from "./api/api.js";

const brugesZone = [
    [44.86961548606894, -0.5759715053876278],
    [44.90933732533827, -0.5803017918796911],
    [44.898025304376404, -0.6281459486766039],
    [44.882096104125765, -0.6299925464225282],
    [44.8709394415134, -0.6138000049514005],
    [44.86955555082636, -0.5759734250747215]
];
const lebouscatZone = [
    [44.86955555082636, -0.5759734250747215],
    [44.8709394415134, -0.6138000049514005],
    [44.87666247021164, -0.6222332231690189],
    [44.87354528618647, -0.6306688185055123],
    [44.87165769568162, -0.6309680926900967],
    [44.863929060075634, -0.620044149062096],
    [44.85297163822122, -0.5939839403717144],
    [44.86094865363745, -0.5881290613684769],
    [44.86600217877279, -0.5757435529628481],
];
const merignacZone = [
    [44.83705735422498, -0.6068572939801697],
    [44.83898519727083, -0.6272086310185614],
    [44.8608208353825, -0.6397440985439857],
    [44.86279263125056, -0.6530805265461197],
    [44.85732609589945, -0.6601058106996618],
    [44.858841731676506, -0.6751465419801548],
    [44.846819575530986, -0.7192046012548303],
    [44.84939991358644, -0.7524738831533],
    [44.834957502065066, -0.7536144579431721],
    [44.83046990510846, -0.7369971320886464],
    [44.81344921719722, -0.7259393850605704],
    [44.803981811898524, -0.728881632811266],
    [44.79893925455758, -0.7099131202737681],
    [44.80095177500547, -0.7024355230998367],
    [44.81982028817629, -0.6118373206165302],
    [44.837062564864965, -0.6068529795123823]
];
const pessacZone = [
    [44.81982028817629, -0.6118373206165302],
    [44.80095177500547, -0.7024355230998367],
    [44.79893925455758, -0.7099131202737681],
    [44.80206661448966, -0.722183768186909],
    [44.80186913608779, -0.7293074987196064],
    [44.77553724185259, -0.7338343036686013],
    [44.750881786142656, -0.7604953983691587],
    [44.74679842806549, -0.754943937656634],
    [44.77224842154439, -0.7130595917937512],
    [44.78225162815926, -0.6889354464037183],
    [44.778249203150295, -0.6811535054668241],
    [44.77808402237193, -0.6441966949197422],
    [44.791198715908564, -0.6178680764963644],
    [44.81099228872938, -0.6063522263760603],
    [44.814336164672596, -0.6111595495248991],
    [44.818415146935706, -0.6028640039454842],
];
const talenceZone = [
    [44.82510592049468, -0.5894739636612485],
    [44.814336164672596, -0.6111595495248991],
    [44.81099228872938, -0.6063522263760603],
    [44.791198715908564, -0.6178680764963644],
    [44.795988207258546, -0.6028805554559256],
    [44.790632614430706, -0.6051528031424596],
    [44.79027007571122, -0.6018556865961102],
    [44.786663996564045, -0.595708593535818],
    [44.787184340382225, -0.5870544600899166],
    [44.805819908343096, -0.5725979135057457],
    [44.81618553970998, -0.5749984729235109],
    [44.82525242522942, -0.5893896121573619]
];
const beglesZone = [
    [44.82289125688874, -0.5372487056187367],
    [44.81229422502335, -0.5575911725018443],
    [44.813019933409066, -0.5641717341090668],
    [44.811150512675, -0.5738132118399903],
    [44.80295769006878, -0.5717616794527487],
    [44.78331348340902, -0.5658288817446362],
    [44.78787700794257, -0.541058966061513],
    [44.78652403271374, -0.5362938099149801],
    [44.792019155218725, -0.5233072282964883],
    [44.81314819374853, -0.5304614589293806],
    [44.822868515203794, -0.537013528987643]
];
const villenavedornonZone = [
    [44.792019155218725, -0.5233072282964883],
    [44.78652403271374, -0.5362938099149801],
    [44.78787700794257, -0.541058966061513],
    [44.78331348340902, -0.5658288817446362],
    [44.80573960005324, -0.5724898289119267],
    [44.787184340382225, -0.5870544600899166],
    [44.783438064240755, -0.5887927085985041],
    [44.753377109448394, -0.5870311106166923],
    [44.739516046144786, -0.5716633608606969],
    [44.74889316671957, -0.5744047373371188],
    [44.7666264965535, -0.510882859061013],
    [44.77536097546215, -0.5125435838587578],
    [44.792019155218725, -0.5233072282964883],
];
const floiracZone = [
    [44.84787065880792, -0.5031980757897543],
    [44.843059140793, -0.5403187322014276],
    [44.83510089096163, -0.5485515199834197],
    [44.82722774223049, -0.5321991737622227],
    [44.825702688868915, -0.535782333603521],
    [44.82409334678263, -0.5347083404946886],
    [44.822868515203794, -0.537013528987643],
    [44.81638560629034, -0.5319619692156721],
    [44.81901167135223, -0.5195427649307476],
    [44.835032636951155, -0.49477571262852393],
    [44.8477858673744, -0.5028755315432818]
];
const cenonZone = [
    [44.84787065880792, -0.5031980757897543],
    [44.843059140793, -0.5403187322014276],
    [44.84777382911392, -0.5377454671950659],
    [44.86153596946343, -0.5381036322801265],
    [44.8681653459372, -0.5044034861961961],
    [44.85480469939125, -0.5052334606948534],
    [44.84797184276246, -0.5030884709154577]
];
const gradignanZone = [
    [44.77654040081927, -0.6468971203630929],
    [44.752939238641744, -0.6310233496744786],
    [44.74263175927669, -0.6336655774286726],
    [44.7421260558358, -0.6291374463650641],
    [44.74711192099056, -0.6265304435729888],
    [44.74854986640224, -0.6162860765277571],
    [44.758113651577816, -0.6068802411549257],
    [44.757522849239336, -0.6008001852563609],
    [44.787184340382225, -0.5870544600899166],
    [44.786663996564045, -0.595708593535818],
    [44.79027007571122, -0.6018556865961102],
    [44.790632614430706, -0.6051528031424596],
    [44.795988207258546, -0.6028805554559256],
    [44.791198715908564, -0.6178680764963644],
];
const lormontZone = [
    [44.88753980374881, -0.5055676140369201],
    [44.886913828917045, -0.5354236677300719],
    [44.86508110715906, -0.5426180646748548],
    [44.86430858253547, -0.5374469224460086],
    [44.86153596946343, -0.5381036322801265],
    [44.8681653459372, -0.5044034861961961],
    [44.88265201660258, -0.49407154902050365],
    [44.88753980374881, -0.5055676140369201],
];
const cauderanZone = [
    [44.85297163822122, -0.5939839403717144],
    [44.863929060075634, -0.620044149062096],
    [44.87165769568162, -0.6309680926900967],
    [44.8608208353825, -0.6397440985439857],
    [44.83898519727083, -0.6272086310185614],
    [44.83705735422498, -0.6068572939801697],
];
const bordeauxZone = [
    [44.86955555082636, -0.5759734250747215],
    [44.89161529160168, -0.5786644937979304],
    [44.91213511188545, -0.5806748613258605],
    [44.91621577243521, -0.5473594090196343],
    [44.89739148180897, -0.5374020435155273],
    [44.886913828917045, -0.5354236677300719],
    [44.86508110715906, -0.5426180646748548],
    [44.86430858253547, -0.5374469224460086],
    [44.86153596946343, -0.5381036322801265],
    [44.84777382911392, -0.5377454671950659],
    [44.843059140793, -0.5403187322014276],
    [44.83510089096163, -0.5485515199834197],
    [44.82722774223049, -0.5321991737622227],
    [44.825702688868915, -0.535782333603521],
    [44.82409334678263, -0.5347083404946886],
    [44.81229422502335, -0.5575911725018443],
    [44.813019933409066, -0.5641717341090668],
    [44.811150512675, -0.5738132118399903],
    [44.81618553970998, -0.5749984729235109],
    [44.82525242522942, -0.5893896121573619],
    [44.818415146935706, -0.6028640039454842],
    [44.81982028817629, -0.6118373206165302],
    [44.83705735422498, -0.6068572939801697],
    [44.85297163822122, -0.5939839403717144],
    [44.86094865363745, -0.5881290613684769],
    [44.86600217877279, -0.5757435529628481],
];

const CodeInseeBegles = "33039";
const CodeInseeBordeaux = "33063";
const CodeInseeBouscat = "33069";
const CodeInseeBruges = "33075";
const CodeInseeCenon = "33119";
const CodeInseeFloirac = "33167";
const CodeInseeGradignan = "33192";
const CodeInseeLormont = "33249";
const CodeInseeMerignac = "33281";
const CodeInseePessac = "33318";
const CodeInseeTalence = "33522";
const CodeInseeVillenave = "33550";
const CodeInseeCauderan = "33110";

function lerpColor(a, b, t) {
    // a et b sont des strings hex, t est dans [0,1]
    const ah = parseInt(a.slice(1), 16);
    const bh = parseInt(b.slice(1), 16);
    const ar = ah >> 16, ag = (ah >> 8) & 0xff, ab = ah & 0xff;
    const br = bh >> 16, bg = (bh >> 8) & 0xff, bb = bh & 0xff;
    const rr = Math.round(ar + t * (br - ar));
    const rg = Math.round(ag + t * (bg - ag));
    const rb = Math.round(ab + t * (bb - ab));

    return `#${((1 << 24) + (rr << 16) + (rg << 8) + rb).toString(16).slice(1)}`;
}

export default function Map() {
    const [events, setEvents] = React.useState(undefined);

    useEffect(() => {
        fetchEvents()
    })

    async function fetchEvents() {
        if (events) return

        let resp = await getEvents()
        setEvents(resp)
    }

    if (!events) return <p>...</p>

    return (
        <MapContainer center={[44.837789, -0.57918]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Polygon positions={brugesZone} pathOptions={{ color: "black", fillOpacity: 0.4 }}>
                <Tooltip direction="center" permanent>
                    <div className={'map-count-tooltip'}>
                        <b className={'map-count-header'}>Bruges</b>
                        <p className={'map-count-label'}>{events[CodeInseeBruges].event_count}</p>
                    </div>
                </Tooltip>
            </Polygon>
            <Polygon positions={lebouscatZone} pathOptions={{ color: "green", fillOpacity: 0.4 }}>
                <Tooltip direction="center" permanent>
                    <div className={'map-count-tooltip'}>
                        <b className={'map-count-header'}>Le Bouscat</b>
                        <p className={'map-count-label'}>{events[CodeInseeBouscat].event_count}</p>
                    </div>
                </Tooltip>
            </Polygon>
            <Polygon positions={merignacZone} pathOptions={{ color: "yellow", fillOpacity: 0.4 }}>
                <Tooltip direction="center" permanent>
                    <div className={'map-count-tooltip'}>
                        <b className={'map-count-header'}>Mérignac</b>
                        <p className={'map-count-label'}>{events[CodeInseeMerignac].event_count}</p>
                    </div>
                </Tooltip>
            </Polygon>
            <Polygon positions={pessacZone} pathOptions={{ color: "black", fillOpacity: 0.4 }}>
                <Tooltip direction="center" permanent>
                    <div className={'map-count-tooltip'}>
                        <b className={'map-count-header'}>Pessac</b>
                        <p className={'map-count-label'}>{events[CodeInseePessac].event_count}</p>
                    </div>
                </Tooltip>
            </Polygon>
            <Polygon positions={talenceZone} pathOptions={{ color: "purple", fillOpacity: 0.4 }}>
                <Tooltip direction="center" permanent>
                    <div className={'map-count-tooltip'}>
                        <b className={'map-count-header'}>Talence</b>
                        <p className={'map-count-label'}>{events[CodeInseeTalence].event_count}</p>
                    </div>
                </Tooltip>
            </Polygon>
            <Polygon positions={beglesZone} pathOptions={{ color: "pink", fillOpacity: 0.4 }}>
                <Tooltip direction="center" permanent>
                    <div className={'map-count-tooltip'}>
                        <b className={'map-count-header'}>Bègles</b>
                        <p className={'map-count-label'}>{events[CodeInseeBegles].event_count}</p>
                    </div>
                </Tooltip>
            </Polygon>
            <Polygon positions={villenavedornonZone} pathOptions={{ color: "red", fillOpacity: 0.4 }}>
                <Tooltip direction="center" permanent>
                    <div className={'map-count-tooltip'}>
                        <b className={'map-count-header'}>Villenave d'Ornon</b>
                        <p className={'map-count-label'}>{events[CodeInseeVillenave].event_count}</p>
                    </div>
                </Tooltip>
            </Polygon>
            <Polygon positions={floiracZone} pathOptions={{ color: "green", fillOpacity: 0.4 }}>
                <Tooltip direction="center" permanent>
                    <div className={'map-count-tooltip'}>
                        <b className={'map-count-header'}>Floirac</b>
                        <p className={'map-count-label'}>{events[CodeInseeFloirac].event_count}</p>
                    </div>
                </Tooltip>
            </Polygon>
            <Polygon positions={cenonZone} pathOptions={{ color: "red", fillOpacity: 0.4 }}>
                <Tooltip direction="center" permanent>
                    <div className={'map-count-tooltip'}>
                        <b className={'map-count-header'}>Cenon</b>
                        <p className={'map-count-label'}>{events[CodeInseeCenon].event_count}</p>
                    </div>
                </Tooltip>
            </Polygon>
            <Polygon positions={gradignanZone} pathOptions={{ color: "yellow", fillOpacity: 0.4 }}>
                <Tooltip direction="center" permanent>
                    <div className={'map-count-tooltip'}>
                        <b className={'map-count-header'}>Gradignan</b>
                        <p className={'map-count-label'}>{events[CodeInseeGradignan].event_count}</p>
                    </div>
                </Tooltip>
            </Polygon>
            <Polygon positions={lormontZone} pathOptions={{ color: "yellow", fillOpacity: 0.4 }}>
                <Tooltip direction="center" permanent>
                    <div className={'map-count-tooltip'}>
                        <b className={'map-count-header'}>Lormont</b>
                        <p className={'map-count-label'}>{events[CodeInseeLormont].event_count}</p>
                    </div>
                </Tooltip>
            </Polygon>
            <Polygon positions={bordeauxZone} pathOptions={{ color: "black", fillOpacity: 0.4 }}>
                <Tooltip direction="center" permanent>
                    <div className={'map-count-tooltip'}>
                        <b className={'map-count-header'}>Bordeaux</b>
                        <p className={'map-count-label'}>{events[CodeInseeBordeaux].event_count}</p>
                    </div>
                </Tooltip>
            </Polygon>
        </MapContainer>
    );
}