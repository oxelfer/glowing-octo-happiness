import Title from '../components/title';
import IntroParagraph from '../components/intro';
import MapComponent from '../components/maps';

import IntroMock from '../mocks/intro-mock';

import './visit.css';

export function Visit() {
  const introText = IntroMock()[5];

  return (
    <>
      <Title text='How to visit' />
      
      <IntroParagraph text={introText.page + ' - ' + introText.text} />
      
      <div className='visit-container'>
        <div className='visit__map'>
          <MapComponent />
        </div>

        <div className='visit__info'>
          <div className='visit__schedule'>
            <table>
              <tbody>
                <tr>
                  <td>Mon. Wed. Fri.</td>
                  <td>10:00 - 22:00</td>
                </tr>
                <tr>
                  <td>Tue. Thu. Sat.</td>
                  <td>10:00 - 20:00</td>
                </tr>
                <tr>
                  <td>Sun.</td>
                  <td>09:00 - 20:00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='visit__address'>
            <table>
              <tbody>
                <tr>
                  <th>Mock-Up Museum</th>
                </tr>
                <tr>
                  <td>Liberty Avenue 7</td>
                </tr>
                <tr>
                  <td>Concordia</td>
                </tr>
                <tr>
                  <td>1000-001 Imagiland</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='visit__prices'>
            <table>
              <tbody>
                <tr>
                  <td>Full ticket</td>
                  <td>15.00 €</td>
                </tr>
                <tr>
                  <td>Discount ticket</td>
                  <td>10.00 €</td>
                </tr>
              </tbody>
            </table>

          </div>

        </div>
      </div>

    </>
  )
}