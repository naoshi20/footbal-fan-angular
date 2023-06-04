import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() public link?: string = ''
  @Input() public title?: string = 'デフォルト'
  @Input() public buttonType?: string = 'primary'
  @Input() public bgColor?: string = 'white'
  @Input() public isDisabled: boolean = false

  public classes: string = 'Button_PrimaryButtonWithWhiteBg'

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('***************')
    console.log('ButtonComponent')
    console.log(this.isDisabled)
    this.addClass()
    console.log('***************')
  }

  public onClick(): void {
    this.router.navigateByUrl(this.link ?? '')
  }

  private addClass(): void {
    console.log(this.buttonType)
    if (!this.buttonType || !this.bgColor) {
      return
    }
    // 親コンポーネントから受け取った文字列をcssクラスの文字列として使えるよう変換
    const buttonType =
      this.buttonType.charAt(0).toUpperCase() + this.buttonType.slice(1)
    const bgColor = this.bgColor.charAt(0).toUpperCase() + this.bgColor.slice(1)

    const style = `Button_${buttonType}ButtonWith${bgColor}Bg`

    this.classes = style
  }
}
