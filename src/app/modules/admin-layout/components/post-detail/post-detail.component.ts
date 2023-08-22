import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AdminService} from '../../services/admin.service';
import {DestroyableComponent} from '../../../../core/abstract/destroyable.component';
import {takeUntil} from 'rxjs';
import {IPost} from '../../interfaces/post.interface';
import {CommonModule} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  imports: [
    CommonModule
  ],
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent extends DestroyableComponent implements OnInit {
  post: IPost;
  private postId = this.route.snapshot.params['id'];

  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService
  ) {
    super();
  }

  ngOnInit() {
    this.getPost()
  }

  private getPost(): void {
    this.adminService.getPost(this.postId)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(res => this.post = res)
  }
}
