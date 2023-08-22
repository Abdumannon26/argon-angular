import {Component, OnInit} from '@angular/core';
import {IPost} from '../../interfaces/post.interface';
import {AdminService} from '../../services/admin.service';
import {DestroyableComponent} from '../../../../core/abstract/destroyable.component';
import {takeUntil} from 'rxjs';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  imports: [
    NgbDropdownModule,
    CommonModule
  ],
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent extends DestroyableComponent implements OnInit {
  posts: IPost[];

  constructor(
    private adminService: AdminService,
    private router: Router
  ) {
    super();
  }

  ngOnInit() {
    this.getPosts();
  }

  navigate(post: IPost): void {
    this.router.navigate(['/admin', post.id]).catch()
  }

  private getPosts(): void {
    this.adminService.getPosts()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(res => this.posts = res)
  }

  //TODO
  // get paginatedItems() {
  //   const startIndex = (this.pagination.currentPage - 1) * this.pagination.itemsPerPage;
  //   return this.posts.slice(startIndex, startIndex + this.pagination.itemsPerPage);
  // }
  //
  // get totalPages() {
  //   return Math.ceil(this.posts.length / this.pagination.itemsPerPage);
  // }
  //
  // changePage(page: number) {
  //   if (page >= 1 && page <= this.totalPages) {
  //     this.pagination.currentPage = page;
  //   }
  // }
}
