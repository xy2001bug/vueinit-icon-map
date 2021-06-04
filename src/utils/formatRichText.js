// 富文本图片自适应
function formatRichText (html) {
    let newContent = html.replace(/<img[^>]*>/gi, function (match, capture) {
        match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '')
        match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '')
        match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '')
        return match
    })
    newContent = newContent.replace(/style="[^"]+"/gi, function (match, capture) {
        match = match.replace(/width:[^;]+;/gi, 'max-width:100%;').replace(/width:[^;]+;/gi, 'max-width:100%;')
        return match
    })
    newContent = newContent.replace(/<br[^>]*\/>/gi, '')
    // eslint-disable-next-line no-useless-escape
    newContent = newContent.replace(/\<img/gi, '<img style="max-width:100%;height:auto;margin-top:0;margin-bottom:0;"')
    return newContent
}
export default formatRichText
