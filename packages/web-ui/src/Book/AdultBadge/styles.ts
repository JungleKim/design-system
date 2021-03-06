import { merge } from 'lodash';
import { resetLayout } from '../../styles';

const adultBadgeImage = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAA3lBMVEUAAAD///////////////////////////////////////////////////////////////////////81NTVCQkJQUFBdXV1ra2t4eHiGhoaTk5OhoaGurq68vLzJycnX19fgO0TgPEXhQEjhQkvhQ0viRk7iR0/jT1fk5OTlWWHmYmnmY2robXTpc3rqeX/qeoDqfILrgofshYrtjpPvmp7xpqryrrHyrrLy8vL0u771vsH2yMr3zM/41Nb64OL64eL74+X75OX99fX+9/f+9/j++vv//Pz//f3//v7///+wMepRAAAAE3RSTlMABQgPGiRAZ4STpaa2wd3s8vT81+Bq9AAAAgRJREFUOMuVVeta4jAQLYrI/daKS7uUQQEBhZXbchNcQBbO+7+QkzY0RcpnPX+STk5OZiaTqab5EYnF09kCUMim47GIdgk3iRx8yCVuAmnRZBHYLka9Trvd6Y0WW6CYjJ7zbvPAsl8nD/X+EsjffqFdpYD3rsuoNZs1d9ZdAakrP+86g8P4gZcag9l6D+zXs0GDPx/GB2SufXoZ7F7Z/jT5ULF8TJ7Y9LpDRmmmsHth43CDE2yGbHzZIeXFgQPrPc5xhvkjax4gI4rmMWbeGwLwxswx8m6WknjnOOYIxJwjWiHp3EcRnJchLoD97KIo7iiBJce7uUTccOxLJLgOcugT/ZXmlmXL8de9nE6I+shFtBi2dWq4+bPLum6JyW/dQdnJZ4PqW8S0OBZEA2e1JBYFsaJLOLsGRAvEtTRGRDOlItbudN2oVHifIYgzohHSWhZ/iP7x99Q4ElvuIHSFm2uiHrJaAc9E/8VOy6y6DNtl2FJ/X6MOChrQpuYxF0rRdH1xnGxSGwgiCh/1silcqSiiOloRrWPUjo/yaC8YHxEWqxlCFyoYLz1+IkdiVw2ZcZkelfCS/zzYQrDlS7i6Qp9jU9O7Je8KVVHcK6LtjOZJUQSWmSCW7NMyCyzcqWVVzwo39FMI/7hCP9fwDSB8SwndpNy2twrR9sI30h+05vDN/pvfxyfpvPzVV3w0fwAAAABJRU5ErkJggg==)';
export const adultBadge = merge({}, resetLayout, {
  display: 'block',
  position: 'absolute',
  top: 2,
  right: 2,
  width: 20,
  height: 20,
  background: adultBadgeImage,
  backgroundSize: 'cover',
  fontSize: 0,
});
